import CheckoutClient from './checkout-client';
export default async function CheckoutPage({searchParams}:{searchParams:Promise<{service?:string}>}){const params=await searchParams;return <CheckoutClient slug={params.service||''}/>}
