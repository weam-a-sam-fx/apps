const APP={id:'wf',name:'WEAM FX',ver:'0.6',tabs:[
{id:'home',render:async(el)=>{const D=await (await fetch('data.json')).json();const g=D.gold;
el.append(h('div',{class:'card hero'},h('div',{class:'mu'},t('goldClose')+' | '+g.date),h('div',{class:'big'},'$'+fmt(g.close)),h('div',{class:'row mu'},h('span',{},t('high')+' '+fmt(g.high)),h('span',{},t('low')+' '+fmt(g.low))),h('div',{class:'mu'},t('source')+': '+g.src)),
h('h2',{},t('liveChart')));const w=h('div',{style:'height:220px;border-radius:16px;overflow:hidden'});el.append(w);
const s=document.createElement('script');s.src='https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';s.async=true;s.text=JSON.stringify({symbol:'OANDA:XAUUSD',width:'100%',height:220,locale:L==='ar'?'ar_AE':L,dateRange:'1M',colorTheme:'dark',isTransparent:true,autosize:false});w.append(s);
const TV={ar:'افتح الشارت على TradingView',en:'Open live chart on TradingView',fr:'Ouvrir le graphique sur TradingView',es:'Abrir el gráfico en TradingView',tr:'TradingView\'de canlı grafiği aç',fa:'باز کردن نمودار در TradingView',ur:'TradingView پر لائیو چارٹ کھولیں',hi:'TradingView पर लाइव चार्ट खोलें'};
const LV={ar:'السعر الحي',en:'Live price',fr:'Prix en direct',es:'Precio en vivo',tr:'Canlı fiyat',fa:'قیمت زنده',ur:'لائیو قیمت',hi:'लाइव कीमत'};
el.append(h('a',{class:'btn ghost',href:'https://www.tradingview.com/chart/?symbol=OANDA%3AXAUUSD',target:'_blank',rel:'noopener'},TV[L]||TV.en));
const lp=h('div',{class:'mu',dir:'ltr'});el.querySelector('.hero').append(lp);
fetch('https://api.gold-api.com/price/XAU').then(r=>r.json()).then(j=>{if(j&&j.price)lp.textContent=(LV[L]||LV.en)+': $'+fmt(j.price)+' | gold-api.com | '+String(j.updatedAt||'').slice(11,16)+' UTC'}).catch(()=>{});
el.append(h('h2',{},t('links')),h('a',{class:'btn',href:'https://weamfx.dpdns.org/'},t('website')),h('a',{class:'btn ghost',href:'https://youtube.com/@weamsam2625'},t('youtube')),h('a',{class:'btn ghost',href:'https://t.me/WeaM_FX'},'Telegram'),h('p',{class:'warn'},t('disclaimer')))}},
{id:'tools',render:el=>el.append(posCalc(),rrCalc(),ddCalc())},
{id:'journal',render:el=>{const K='wf_journal',get=()=>JSON.parse(localStorage.getItem(K)||'[]'),set=a=>localStorage.setItem(K,JSON.stringify(a));const list=h('div'),stats=h('div',{class:'card'});
const draw=()=>{const a=get();list.innerHTML='';const w=a.filter(x=>x.r>0).length,tot=a.reduce((s,x)=>s+x.r,0);stats.innerHTML='';stats.append(h('div',{class:'row'},h('span',{},t('trades')+': '+a.length),h('span',{},t('winRate')+': '+(a.length?fmt(w/a.length*100,0)+'%':'-')),h('b',{class:tot>=0?'pos':'neg'},t('total')+': $'+fmt(tot))));
if(!a.length)list.append(h('p',{class:'mu'},t('empty')));a.slice().reverse().forEach((x,i)=>list.append(h('div',{class:'card'},h('div',{class:'row'},h('b',{},x.s+' '+(x.d==='b'?t('buy'):t('sell'))),h('b',{class:x.r>=0?'pos':'neg'},'$'+fmt(x.r)),h('button',{class:'del',on:{click:()=>{const b=get();b.splice(a.length-1-i,1);set(b);draw()}}},'×')),h('div',{class:'mu'},x.dt+(x.n?' | '+x.n:'')))))};
const sym=h('input',{value:'XAUUSD'}),dir=h('select',{},h('option',{value:'b'},t('buy')),h('option',{value:'s'},t('sell'))),res=h('input',{inputmode:'decimal'}),nt=h('input');
const form=h('div',{class:'card'},h('b',{},t('add')),h('label',{},t('symbol')),sym,h('div',{class:'grid2'},h('div',{},h('label',{},t('buy')+'/'+t('sell')),dir),h('div',{},h('label',{},t('result')),res)),h('label',{},t('note')),nt,h('button',{class:'btn',on:{click:()=>{const r=num(res.value);if(!isFinite(r))return;const a=get();a.push({s:sym.value||'XAUUSD',d:dir.value,r,n:nt.value,dt:new Date().toISOString().slice(0,10)});set(a);res.value='';nt.value='';draw()}}},t('add')));
el.append(stats,form,h('p',{class:'mu'},t('journalNote')),list);draw()}},
{id:'learn',render:el=>{const LH={ar:['محتوى عربي','كورس SMC','نظام SK','شورتس SMC','القناة'],en:['Arabic content','SMC course','SK system','SMC shorts','Channel'],fr:['Contenu en arabe','Cours SMC','Système SK','Shorts SMC','Chaîne'],es:['Contenido en árabe','Curso SMC','Sistema SK','Shorts SMC','Canal'],tr:['Arapça içerik','SMC kursu','SK sistemi','SMC shorts','Kanal'],fa:['محتوای عربی','دوره SMC','سیستم SK','شورتس SMC','کانال'],ur:['عربی مواد','SMC کورس','SK سسٹم','SMC شارٹس','چینل'],hi:['अरबी कंटेंट','SMC कोर्स','SK सिस्टम','SMC शॉर्ट्स','चैनल']}[L]||[];
const Y='https://www.youtube.com/';const PL={ar:'قائمة تشغيل الكورس كاملة',en:'Full course playlist',fr:'Playlist complète du cours',es:'Lista completa del curso',tr:'Kursun tüm oynatma listesi',fa:'پلی‌لیست کامل دوره',ur:'مکمل کورس پلے لسٹ',hi:'पूरी कोर्स प्लेलिस्ट'};const lk=(ti,u)=>h('a',{class:'card',href:u,target:'_blank',rel:'noopener',style:'display:block;color:inherit;text-decoration:none'},h('div',{dir:'rtl',style:'font-weight:600'},ti),h('div',{class:'mu',dir:'ltr'},'YouTube'));
const sec=(n)=>h('h2',{},LH[n]);
el.append(h('p',{class:'mu'},LH[0]),sec(1),
lk('محاضرة ١ | شرح SMC كامل من الصفر | BOS وCHoCH والأوردر بلوك والسيولة',Y+'watch?v=MRzN6DaQ18E'),
lk('محاضرة ٢ | إزاي ترسم الهيكل السعري صح | BOS وCHoCH عملي على الشارت',Y+'watch?v=RslPQxKTYG4'),
lk('محاضرة ٣ | السيولة وسحب السيولة: تفرّق إزاي بين الرفض والاختراق؟',Y+'watch?v=jTn71aX_YLI'),
lk('محاضرة ٤ | الأوردر بلوك وفجوة القيمة العادلة: إزاي ترسم المنطقة بقواعد؟',Y+'watch?v=RUHY8zwdng8'),
sec(2),lk('نظام SK من الصفر: إزاي تحدد دخولك وهدفك على الشارت',Y+'watch?v=ylmUF3E-lfo'),
sec(3),lk('BOS.. استمرار ولا انعكاس؟',Y+'shorts/Y8-o1cRTa0E'),lk('CHoCH إنذار.. مش انعكاس أكيد!',Y+'shorts/m_v4XiXU6XM'),lk('فين السيولة؟',Y+'shorts/PCC55F4clQw'),lk('مش أي شمعة عكسية Order Block!',Y+'shorts/oUHxfV34-L8'),
h('a',{class:'btn',href:Y+'playlist?list=PLPxdmJc02TO4',target:'_blank',rel:'noopener'},PL[L]||PL.en),h('a',{class:'btn ghost',href:'https://youtube.com/@weamsam2625'},LH[4]+': '+t('youtube')),h('a',{class:'btn ghost',href:'https://weamfx.dpdns.org/'},t('website')),h('p',{class:'warn'},t('disclaimer')))}},
{id:'more',render:el=>moreTab(el)}]};
