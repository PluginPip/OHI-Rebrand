import Link from 'next/link';
import {Shell,PageHero} from '../components/site';
import {commerceServices,money} from '../data/commerce';

export default function ShopPage(){return <Shell><PageHero eyebrow="OHI COMMERCE" title="Occupational-health services you can understand before you buy." intro="Browse services, read the full scope and then buy, book or build a tailored quote. Representative demo pricing is shown while final OHI commercial rates are agreed."/><section className="section"><div className="wrap grid3">{commerceServices.map(service=><article className="card" key={service.slug}><span className="badge">{service.purchaseMode==='quote'?'Tailored quote':service.purchaseMode==='book'?'Book appointment':'Buy online'}</span><h3>{service.name}</h3><div className="price">{money(service.pricePence)}</div><p>{service.summary}</p><Link className="btn primary" href={`/shop/${service.slug}`}>View details</Link></article>)}</div></section></Shell>}
