import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Shell,PageHero} from '../../components/site';
import {commerceServices,getCommerceService,money} from '../../data/commerce';

export function generateStaticParams(){return commerceServices.map(service=>({slug:service.slug}))}

export default async function CommerceServicePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const service=getCommerceService(slug); if(!service)notFound();
 return <Shell><PageHero eyebrow="OHI COMMERCE" title={service.name} intro={service.summary}/><section className="section"><div className="wrap detail-layout"><article className="card"><span className="badge">{service.purchaseMode==='quote'?'Tailored service':service.purchaseMode==='book'?'Book appointment':'Buy online'}</span><h2>About this service</h2><p>{service.description}</p><h3>Who this is for</h3><p>{service.forWho}</p><h3>What is included</h3><ul>{service.includes.map(item=><li key={item}>{item}</li>)}</ul><h3>Before the appointment</h3><p>{service.preparation}</p><div className="success-note">{service.note}</div></article><aside className="card detail-aside"><span className="badge">Representative demo pricing</span><div className="price">{money(service.pricePence)}</div><p><b>Typical service time</b><br/>{service.duration}</p>{service.purchaseMode==='quote'?<Link className="btn primary" href={`/what-do-i-need?service=${service.slug}`}>Build a quote</Link>:<Link className="btn primary" href={`/checkout?service=${service.slug}`}>{service.purchaseMode==='book'?'Book this service':'Continue to checkout'}</Link>}<Link className="btn soft" href="/shop">Back to services</Link></aside></div></section></Shell>
}
