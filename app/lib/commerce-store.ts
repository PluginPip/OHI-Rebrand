import {promises as fs} from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export type PaymentStatus='pending'|'paid'|'failed'|'invoice-draft'|'invoice-authorised'|'invoice-paid'|'cancelled';
export type WorkflowStatus='pending-finance'|'ready'|'in-progress'|'complete';
export type CommerceOrder={
 id:string;accessToken:string;createdAt:string;updatedAt:string;serviceSlug:string;service:string;totalPence:number;currency:'GBP';organisation:string;email:string;poNumber:string|null;paymentMethod:'card'|'invoice';paymentStatus:PaymentStatus;workflow:{type:'booking'|'referral'|'surveillance'|'order';status:WorkflowStatus;workItemId:string|null};stripeCheckoutSessionId?:string;stripePaymentIntentId?:string;xeroInvoiceId?:string;xeroInvoiceNumber?:string;
};
type Store={orders:CommerceOrder[];integrations:{xeroRefreshToken?:string}};
const file=process.env.OHI_COMMERCE_STORE_PATH||path.join(process.cwd(),'data','commerce-store.json');
let queue=Promise.resolve();
async function readStore():Promise<Store>{try{return JSON.parse(await fs.readFile(file,'utf8')) as Store}catch{return {orders:[],integrations:{}}}}
async function writeStore(store:Store){await fs.mkdir(path.dirname(file),{recursive:true});const tmp=`${file}.${process.pid}.tmp`;await fs.writeFile(tmp,JSON.stringify(store,null,2),'utf8');await fs.rename(tmp,file)}
function locked<T>(fn:()=>Promise<T>){const next=queue.then(fn,fn);queue=next.then(()=>undefined,()=>undefined);return next}
export function newOrderId(){return `OHI-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`}
export function newAccessToken(){return crypto.randomBytes(24).toString('base64url')}
export async function createOrder(order:CommerceOrder){return locked(async()=>{const s=await readStore();s.orders.unshift(order);await writeStore(s);return order})}
export async function getOrder(id:string){const s=await readStore();return s.orders.find(o=>o.id===id)||null}
export async function getOrderByStripeSession(id:string){const s=await readStore();return s.orders.find(o=>o.stripeCheckoutSessionId===id)||null}
export async function getOrderByXeroInvoice(id:string){const s=await readStore();return s.orders.find(o=>o.xeroInvoiceId===id)||null}
export async function updateOrder(id:string,patch:Partial<CommerceOrder>){return locked(async()=>{const s=await readStore();const i=s.orders.findIndex(o=>o.id===id);if(i<0)return null;s.orders[i]={...s.orders[i],...patch,updatedAt:new Date().toISOString()};await writeStore(s);return s.orders[i]})}
export async function markWorkflowReady(id:string){return locked(async()=>{const s=await readStore();const i=s.orders.findIndex(o=>o.id===id);if(i<0)return null;const o=s.orders[i];if(o.workflow.status==='pending-finance'){o.workflow={...o.workflow,status:'ready',workItemId:o.workflow.workItemId||`WORK-${crypto.randomBytes(4).toString('hex').toUpperCase()}`};o.updatedAt=new Date().toISOString();await writeStore(s)}return o})}
export async function getXeroRefreshToken(){const s=await readStore();return s.integrations.xeroRefreshToken||process.env.XERO_REFRESH_TOKEN||''}
export async function setXeroRefreshToken(token:string){return locked(async()=>{const s=await readStore();s.integrations.xeroRefreshToken=token;await writeStore(s)})}
