import {getXeroRefreshToken,setXeroRefreshToken} from './commerce-store';

type XeroTokens={access_token:string;refresh_token?:string;expires_in:number};
async function accessToken(){
 const client=process.env.XERO_CLIENT_ID,secret=process.env.XERO_CLIENT_SECRET,refresh=await getXeroRefreshToken();
 if(!client||!secret||!refresh)throw new Error('Xero OAuth is not configured.');
 const body=new URLSearchParams({grant_type:'refresh_token',refresh_token:refresh});
 const res=await fetch('https://identity.xero.com/connect/token',{method:'POST',headers:{authorization:`Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`,'content-type':'application/x-www-form-urlencoded'},body,cache:'no-store'});
 const json=await res.json() as XeroTokens & {error?:string};if(!res.ok||!json.access_token)throw new Error(`Xero token refresh failed${json.error?`: ${json.error}`:''}.`);if(json.refresh_token)await setXeroRefreshToken(json.refresh_token);return json.access_token;
}
async function headers(){const tenant=process.env.XERO_TENANT_ID;if(!tenant)throw new Error('Xero tenant is not configured.');return {authorization:`Bearer ${await accessToken()}`,'xero-tenant-id':tenant,accept:'application/json','content-type':'application/json'}}
export async function createXeroInvoice(input:{orderId:string;service:string;pricePence:number;organisation:string;email:string;poNumber:string}){
 const h=await headers();const contactRes=await fetch('https://api.xero.com/api.xro/2.0/Contacts',{method:'POST',headers:h,body:JSON.stringify({Contacts:[{Name:input.organisation,EmailAddress:input.email}]}),cache:'no-store'});const contactJson=await contactRes.json();if(!contactRes.ok)throw new Error('Xero contact could not be created or resolved.');const contactId=contactJson?.Contacts?.[0]?.ContactID;if(!contactId)throw new Error('Xero did not return a contact ID.');
 const invoice={Type:'ACCREC',Contact:{ContactID:contactId},LineItems:[{Description:input.service,Quantity:1,UnitAmount:input.pricePence/100,AccountCode:process.env.XERO_SALES_ACCOUNT_CODE||'200'}],Reference:input.poNumber?`${input.orderId} · PO ${input.poNumber}`:input.orderId,Status:process.env.XERO_INVOICE_STATUS||'DRAFT'};
 const res=await fetch('https://api.xero.com/api.xro/2.0/Invoices',{method:'POST',headers:h,body:JSON.stringify({Invoices:[invoice]}),cache:'no-store'});const json=await res.json();if(!res.ok)throw new Error('Xero invoice could not be created.');const i=json?.Invoices?.[0];return {invoiceId:i?.InvoiceID as string|undefined,invoiceNumber:i?.InvoiceNumber as string|undefined,status:i?.Status as string|undefined};
}
export async function getXeroInvoice(invoiceId:string){const h=await headers();const res=await fetch(`https://api.xero.com/api.xro/2.0/Invoices/${encodeURIComponent(invoiceId)}`,{headers:h,cache:'no-store'});const json=await res.json();if(!res.ok)throw new Error('Xero invoice could not be refreshed.');return json?.Invoices?.[0] as {InvoiceID:string;InvoiceNumber?:string;Status?:string;AmountDue?:number;AmountPaid?:number}|undefined}
