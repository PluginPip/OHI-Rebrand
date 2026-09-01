import {NextResponse} from 'next/server';
import {commerceServices} from '../../../data/commerce';

export const runtime='nodejs';

type CheckoutBody={serviceSlug?:string;paymentMethod?:'card'|'invoice';organisation?:string;email?:string;poNumber?:string};
function orderId(){return `OHI-${Date.now().toString(36).toUpperCase()}`}
function baseUrl(req:Request){return process.env.NEXT_PUBLIC_APP_URL||new URL(req.url).origin}

async function stripeCheckout(req:Request,order:string,service:{slug:string;name:string;pricePence:number},email:string,organisation:string){
 const key=process.env.STRIPE_SECRET_KEY;if(!key)throw new Error('Stripe is not configured on this environment.');
 const body=new URLSearchParams();body.set('mode','payment');body.set('success_url',`${baseUrl(req)}/portal/orders?placed=1&provider=stripe&order=${encodeURIComponent(order)}`);body.set('cancel_url',`${baseUrl(req)}/checkout?service=${encodeURIComponent(service.slug)}`);body.set('customer_email',email);body.set('client_reference_id',order);body.set('metadata[ohi_order_id]',order);body.set('metadata[organisation]',organisation);body.set('line_items[0][quantity]','1');body.set('line_items[0][price_data][currency]','gbp');body.set('line_items[0][price_data][unit_amount]',String(service.pricePence));body.set('line_items[0][price_data][product_data][name]',service.name);
 const response=await fetch('https://api.stripe.com/v1/checkout/sessions',{method:'POST',headers:{authorization:`Bearer ${key}`,'content-type':'application/x-www-form-urlencoded'},body,cache:'no-store'});const json=await response.json();if(!response.ok)throw new Error(json?.error?.message||'Stripe checkout could not be created.');return {id:json.id as string,url:json.url as string};
}

async function xeroInvoice(order:string,service:{name:string;pricePence:number},organisation:string,email:string,poNumber:string){
 const token=process.env.XERO_ACCESS_TOKEN;const tenant=process.env.XERO_TENANT_ID;if(!token||!tenant)throw new Error('Xero is not configured on this environment.');
 const headers={authorization:`Bearer ${token}`,'xero-tenant-id':tenant,accept:'application/json','content-type':'application/json'};
 const contactRes=await fetch('https://api.xero.com/api.xro/2.0/Contacts',{method:'POST',headers,body:JSON.stringify({Contacts:[{Name:organisation,EmailAddress:email}]}),cache:'no-store'});const contactJson=await contactRes.json();if(!contactRes.ok)throw new Error('Xero contact could not be created or resolved.');const contactId=contactJson?.Contacts?.[0]?.ContactID;if(!contactId)throw new Error('Xero did not return a contact ID.');
 const invoice={Type:'ACCREC',Contact:{ContactID:contactId},LineItems:[{Description:service.name,Quantity:1,UnitAmount:service.pricePence/100,AccountCode:process.env.XERO_SALES_ACCOUNT_CODE||'200'}],Reference:poNumber?`${order} · PO ${poNumber}`:order,Status:'DRAFT'};
 const invRes=await fetch('https://api.xero.com/api.xro/2.0/Invoices',{method:'POST',headers,body:JSON.stringify({Invoices:[invoice]}),cache:'no-store'});const invJson=await invRes.json();if(!invRes.ok)throw new Error('Xero invoice could not be created.');return {invoiceId:invJson?.Invoices?.[0]?.InvoiceID as string|undefined,invoiceNumber:invJson?.Invoices?.[0]?.InvoiceNumber as string|undefined};
}

export async function POST(req:Request){
 try{const body=(await req.json()) as CheckoutBody;const service=commerceServices.find(s=>s.slug===body.serviceSlug);if(!service||service.pricePence===null)return NextResponse.json({error:'This service cannot be checked out at a fixed price.'},{status:400});if(!body.organisation?.trim()||!body.email?.trim())return NextResponse.json({error:'Organisation and billing email are required.'},{status:400});const order=orderId();
 if(body.paymentMethod==='invoice'){const xero=await xeroInvoice(order,{name:service.name,pricePence:service.pricePence},body.organisation.trim(),body.email.trim(),body.poNumber?.trim()||'');return NextResponse.json({order:{id:order,service:service.name,totalPence:service.pricePence,paymentMethod:'invoice',paymentStatus:'invoice-draft',xeroInvoiceId:xero.invoiceId,xeroInvoiceNumber:xero.invoiceNumber,organisation:body.organisation.trim(),poNumber:body.poNumber?.trim()||null}})}
 const stripe=await stripeCheckout(req,order,{slug:service.slug,name:service.name,pricePence:service.pricePence},body.email.trim(),body.organisation.trim());return NextResponse.json({order:{id:order},provider:'stripe',url:stripe.url,stripeCheckoutSessionId:stripe.id});
 }catch(error){console.error('[commerce checkout]',error);return NextResponse.json({error:error instanceof Error?error.message:'Checkout failed.'},{status:500})}
}
