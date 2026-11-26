/* Shared app core: i18n, router, UI helpers, tools. Each app supplies window.APP. */
const LANGS=[['ar','العربية','rtl'],['en','English','ltr'],['fr','Français','ltr'],['es','Español','ltr'],['tr','Türkçe','ltr'],['fa','فارسی','rtl'],['ur','اردو','rtl'],['hi','हिन्दी','ltr']];
const T={
home:['الرئيسية','Home','Accueil','Inicio','Ana sayfa','خانه','ہوم','होम'],
firms:['الشركات','Firms','Sociétés','Firmas','Firmalar','شرکت‌ها','کمپنیاں','फर्म'],
compare:['قارن','Compare','Comparer','Comparar','Karşılaştır','مقایسه','موازنہ','तुलना'],
tools:['أدوات','Tools','Outils','Herramientas','Araçlar','ابزار','ٹولز','टूल्स'],
journal:['اليوميات','Journal','Journal','Diario','Günlük','ژورنال','جرنل','जर्नल'],
learn:['تعلّم','Learn','Apprendre','Aprender','Öğren','آموزش','سیکھیں','सीखें'],
more:['المزيد','More','Plus','Más','Daha fazla','بیشتر','مزید','और'],
language:['اللغة','Language','Langue','Idioma','Dil','زبان','زبان','भाषा'],
install:['ثبّت التطبيق','Install app',"Installer l'app",'Instalar app','Uygulamayı yükle','نصب برنامه','ایپ انسٹال کریں','ऐप इंस्टॉल करें'],
installHint:['من قائمة المتصفح اختار «إضافة إلى الشاشة الرئيسية»','Browser menu → "Add to Home screen"','Menu du navigateur → « Ajouter à l\'écran d\'accueil »','Menú del navegador → «Añadir a pantalla de inicio»','Tarayıcı menüsü → «Ana ekrana ekle»','منوی مرورگر ← «افزودن به صفحه اصلی»','براؤزر مینو ← «ہوم اسکرین میں شامل کریں»','ब्राउज़र मेनू → «होम स्क्रीन पर जोड़ें»'],
score:['الدرجة','Score','Note','Puntuación','Puan','امتیاز','اسکور','स्कोर'],
method:['طريقة التقييم','Scoring method','Méthode de notation','Método de puntuación','Puanlama yöntemi','روش امتیازدهی','اسکورنگ کا طریقہ','स्कोरिंग तरीका'],
methodText:['السمعة 30 | المدفوعات 25 | القواعد 25 | التكلفة 20','Reputation 30 | Payouts 25 | Rules 25 | Cost 20','Réputation 30 | Paiements 25 | Règles 25 | Coût 20','Reputación 30 | Pagos 25 | Reglas 25 | Costo 20','İtibar 30 | Ödemeler 25 | Kurallar 25 | Maliyet 20','اعتبار ۳۰ | پرداخت ۲۵ | قوانین ۲۵ | هزینه ۲۰','ساکھ 30 | ادائیگی 25 | قواعد 25 | لاگت 20','प्रतिष्ठा 30 | भुगतान 25 | नियम 25 | लागत 20'],
viewSite:['التفاصيل الكاملة على الموقع','Full review on the website','Avis complet sur le site','Reseña completa en el sitio','Sitede tam inceleme','بررسی کامل در وب‌سایت','مکمل جائزہ ویب سائٹ پر','पूरी समीक्षा वेबसाइट पर'],
balance:['رصيد الحساب ($)','Account balance ($)','Solde du compte ($)','Saldo de la cuenta ($)','Hesap bakiyesi ($)','موجودی حساب ($)','اکاؤنٹ بیلنس ($)','खाता बैलेंस ($)'],
riskPct:['نسبة المخاطرة %','Risk %','Risque %','Riesgo %','Risk %','ریسک ٪','رسک ٪','जोखिम %'],
stopDist:['مسافة الوقف (بوحدة السعر)','Stop distance (price units)','Distance du stop (unités de prix)','Distancia del stop (unidades de precio)','Stop mesafesi (fiyat birimi)','فاصله حد ضرر (واحد قیمت)','اسٹاپ فاصلہ (قیمت کی اکائی)','स्टॉप दूरी (मूल्य इकाई)'],
contract:['حجم العقد','Contract size','Taille du contrat','Tamaño del contrato','Kontrat büyüklüğü','اندازه قرارداد','کنٹریکٹ سائز','कॉन्ट्रैक्ट साइज़'],
lots:['حجم الصفقة (لوت)','Position size (lots)','Taille (lots)','Tamaño (lotes)','Pozisyon (lot)','حجم معامله (لات)','پوزیشن (لاٹ)','पोज़ीशन (लॉट)'],
riskAmt:['مبلغ المخاطرة','Risk amount','Montant risqué','Monto en riesgo','Risk tutarı','مبلغ ریسک','رسک رقم','जोखिम राशि'],
posCalc:['حاسبة حجم الصفقة','Position size calculator','Calculateur de taille','Calculadora de posición','Pozisyon hesaplayıcı','ماشین‌حساب حجم معامله','پوزیشن کیلکولیٹر','पोज़ीशन कैलकुलेटर'],
ddCalc:['حاسبة حدود الخسارة','Loss limits calculator','Calculateur de limites de perte','Calculadora de límites de pérdida','Kayıp limiti hesaplayıcı','ماشین‌حساب سقف ضرر','نقصان کی حد کیلکولیٹر','हानि सीमा कैलकुलेटर'],
dailyDD:['أقصى خسارة يومية %','Max daily loss %','Perte quotidienne max %','Pérdida diaria máx. %','Maks. günlük kayıp %','حداکثر ضرر روزانه ٪','زیادہ سے زیادہ روزانہ نقصان ٪','अधिकतम दैनिक हानि %'],
maxDD:['أقصى خسارة كلية %','Max total loss %','Perte totale max %','Pérdida total máx. %','Maks. toplam kayıp %','حداکثر ضرر کل ٪','زیادہ سے زیادہ کل نقصان ٪','अधिकतम कुल हानि %'],
dailyLimit:['حد اليوم','Daily limit','Limite du jour','Límite diario','Günlük limit','سقف روزانه','روزانہ حد','दैनिक सीमा'],
totalLimit:['الحد الكلي','Total limit','Limite totale','Límite total','Toplam limit','سقف کل','کل حد','कुल सीमा'],
add:['إضافة صفقة','Add trade','Ajouter un trade','Añadir operación','İşlem ekle','افزودن معامله','ٹریڈ شامل کریں','ट्रेड जोड़ें'],
symbol:['الرمز','Symbol','Symbole','Símbolo','Sembol','نماد','علامت','सिंबल'],
buy:['شراء','Buy','Achat','Compra','Alış','خرید','خرید','खरीद'],
sell:['بيع','Sell','Vente','Venta','Satış','فروش','فروخت','बिक्री'],
result:['النتيجة ($)','Result ($)','Résultat ($)','Resultado ($)','Sonuç ($)','نتیجه ($)','نتیجہ ($)','परिणाम ($)'],
note:['ملاحظة','Note','Note','Nota','Not','یادداشت','نوٹ','नोट'],
trades:['الصفقات','Trades','Trades','Operaciones','İşlemler','معاملات','ٹریڈز','ट्रेड'],
winRate:['نسبة الربح','Win rate','Taux de gain','% de acierto','Kazanma oranı','نرخ برد','جیت کی شرح','जीत दर'],
total:['الإجمالي','Total','Total','Total','Toplam','مجموع','کل','कुल'],
empty:['لسه مفيش بيانات','Nothing here yet',"Rien pour l'instant",'Nada aún','Henüz yok','هنوز چیزی نیست','ابھی کچھ نہیں','अभी कुछ नहीं'],
journalNote:['الصفقات محفوظة على جهازك بس','Trades stay on your device only','Les trades restent sur votre appareil','Las operaciones se guardan solo en tu dispositivo','İşlemler yalnızca cihazınızda kalır','معاملات فقط روی دستگاه شما می‌مانند','ٹریڈز صرف آپ کے آلے پر رہتی ہیں','ट्रेड सिर्फ आपके डिवाइस पर रहते हैं'],
disclaimer:['رأي شخصي وتجربة، مش نصيحة مالية. التداول عالي المخاطر.','Personal opinion and experience, not financial advice. Trading is high risk.','Opinion personnelle, pas un conseil financier. Le trading comporte un risque élevé.','Opinión personal, no es asesoramiento financiero. El trading es de alto riesgo.','Kişisel görüş, yatırım tavsiyesi değildir. Alım satım yüksek risklidir.','نظر شخصی است، توصیه مالی نیست. معامله‌گری پرریسک است.','ذاتی رائے ہے، مالی مشورہ نہیں۔ ٹریڈنگ میں زیادہ خطرہ ہے۔','व्यक्तिगत राय, वित्तीय सलाह नहीं। ट्रेडिंग में उच्च जोखिम है।'],
goldClose:['إغلاق الذهب','Gold close','Clôture de l\'or','Cierre del oro','Altın kapanışı','بسته‌شدن طلا','سونے کا اختتام','सोने का क्लोज़'],
high:['الأعلى','High','Haut','Máx.','Yüksek','بالاترین','بلند','उच्च'],
low:['الأدنى','Low','Bas','Mín.','Düşük','پایین‌ترین','کم','निम्न'],
source:['المصدر','Source','Source','Fuente','Kaynak','منبع','ذریعہ','स्रोत'],
links:['روابط','Links','Liens','Enlaces','Bağlantılar','پیوندها','لنکس','लिंक'],
website:['الموقع','Website','Site web','Sitio web','Web sitesi','وب‌سایت','ویب سائٹ','वेबसाइट'],
privacy:['سياسة الخصوصية','Privacy policy','Politique de confidentialité','Política de privacidad','Gizlilik politikası','سیاست حریم خصوصی','پرائیویسی پالیسی','गोपनीयता नीति'],
liveChart:['الشارت اللايف','Live chart','Graphique en direct','Gráfico en vivo','Canlı grafik','نمودار زنده','لائیو چارٹ','लाइव चार्ट'],
updated:['آخر تحديث','Last updated','Dernière mise à jour','Última actualización','Son güncelleme','آخرین به‌روزرسانی','آخری اپ ڈیٹ','अंतिम अपडेट'],
search:['بحث','Search','Rechercher','Buscar','Ara','جستجو','تلاش','खोजें'],
soon:['قريبًا','Coming soon','Bientôt','Próximamente','Yakında','به‌زودی','جلد آ رہا ہے','जल्द आ रहा है'],
offers:['العروض والأكواد','Offers & codes','Offres et codes','Ofertas y códigos','Teklifler ve kodlar','تخفیف‌ها و کدها','آفرز اور کوڈز','ऑफ़र और कोड'],
offersText:['العروض اللي على المواقع الرسمية للشركات بس، بتاريخها.','Only offers published on the firms\' official sites, dated.','Uniquement les offres publiées sur les sites officiels, datées.','Solo ofertas publicadas en los sitios oficiales, con fecha.','Yalnızca resmi sitelerde yayınlanan, tarihli teklifler.','فقط تخفیف‌های منتشرشده در سایت رسمی شرکت‌ها، با تاریخ.','صرف کمپنیوں کی سرکاری سائٹ کی آفرز، تاریخ کے ساتھ۔','केवल कंपनियों की आधिकारिक साइट के ऑफ़र, तारीख के साथ।'],
youtube:['قناة اليوتيوب','YouTube channel','Chaîne YouTube','Canal de YouTube','YouTube kanalı','کانال یوتیوب','یوٹیوب چینل','यूट्यूब चैनल'],
course:['كورس SMC من الصفر','SMC course from zero','Cours SMC de zéro','Curso SMC desde cero','Sıfırdan SMC kursu','دوره SMC از صفر','SMC کورس شروع سے','SMC कोर्स शुरू से'],
about:['عن التطبيق','About','À propos','Acerca de','Hakkında','درباره','کے بارے میں','जानकारी'],
rr:['حاسبة العائد للمخاطرة','Risk/reward calculator','Calculateur risque/rendement','Calculadora riesgo/beneficio','Risk/ödül hesaplayıcı','ماشین‌حساب ریسک به ریوارد','رسک/ریوارڈ کیلکولیٹر','रिस्क/रिवॉर्ड कैलकुलेटर'],
entry:['الدخول','Entry','Entrée','Entrada','Giriş','ورود','انٹری','एंट्री'],
sl:['وقف الخسارة','Stop loss','Stop loss','Stop loss','Zarar durdur','حد ضرر','اسٹاپ لاس','स्टॉप लॉस'],
tp:['الهدف','Take profit','Objectif','Objetivo','Kâr al','حد سود','ٹیک پرافٹ','टेक प्रॉफ़िट'],
ratio:['النسبة','Ratio','Ratio','Ratio','Oran','نسبت','تناسب','अनुपात']};
const L=localStorage.getItem('lang')||(LANGS.find(l=>(navigator.language||'').startsWith(l[0]))||LANGS[0])[0];
const LI=Math.max(0,LANGS.findIndex(l=>l[0]===L));
const t=k=>(T[k]&&(T[k][LI]||T[k][1]))||(APP.str&&APP.str[k]&&(APP.str[k][LI]||APP.str[k][1]))||k;
document.documentElement.lang=L;document.documentElement.dir=LANGS[LI][2];
const $=(s,r=document)=>r.querySelector(s);
function h(tag,a,...kids){const e=document.createElement(tag);for(const k in(a||{})){if(k==='on')for(const ev in a.on)e.addEventListener(ev,a.on[ev]);else if(k==='html')e.innerHTML=a[k];else if(k==='class')e.className=a[k];else e.setAttribute(k,a[k])}kids.flat().forEach(c=>c!=null&&e.append(c.nodeType?c:document.createTextNode(c)));return e}
const num=v=>{const x=parseFloat(String(v).replace(/[٠-٩]/g,d=>d.charCodeAt(0)-1632).replace(/[۰-۹]/g,d=>d.charCodeAt(0)-1776).replace('٫','.').replace(',','.'));return isFinite(x)?x:NaN};
const fmt=(v,d=2)=>isFinite(v)?v.toLocaleString(L==='ar'?'en':L,{maximumFractionDigits:d}):'-';
const IC={home:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',firms:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',compare:'<path d="M7 4v16M17 4v16M3 8l4-4 4 4M13 16l4 4 4-4"/>',tools:'<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>',journal:'<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M9 8h6M9 12h6"/>',learn:'<path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11.5V16c3 2 7 2 10 0v-4.5"/>',more:'<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'};
const icon=n=>{const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.innerHTML=IC[n]||'';return s};
function sheet(content){const s=h('div',{class:'sheet',on:{click:e=>{if(e.target===s)s.remove()}}},h('div',{},content));document.body.append(s);return s}
function langPicker(){const c=LANGS.map(l=>h('button',{class:'opt'+(l[0]===L?' on':''),on:{click:()=>{localStorage.setItem('lang',l[0]);location.reload()}}},l[1]));sheet(c)}
function field(label,id,val,type){return h('div',{},h('label',{for:id},label),h('input',{id,type:type||'text',inputmode:'decimal',value:val==null?'':val}))}
let deferred;addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;const b=$('#inst');if(b)b.style.display='block'});
/* shared tools */
function posCalc(){const out=h('div',{class:'res',dir:'ltr'},'-'),sub=h('div',{class:'mu',dir:'ltr'}),sub2=h('div',{class:'mu',dir:'ltr'});
const IN={ar:['الذهب XAUUSD (الوقف بالدولار)','فوركس مقابل الدولار EURUSD/GBPUSD (الوقف بالنقاط)','أخرى (قيمة النقطة لكل لوت)'],en:['Gold XAUUSD (stop in $)','USD-quoted forex EURUSD/GBPUSD (stop in pips)','Other (value per unit per lot)'],fr:['Or XAUUSD (stop en $)','Forex coté USD EURUSD/GBPUSD (stop en pips)','Autre (valeur par unité et lot)'],es:['Oro XAUUSD (stop en $)','Forex en USD EURUSD/GBPUSD (stop en pips)','Otro (valor por unidad y lote)'],tr:['Altın XAUUSD (stop $)','USD paritesi EURUSD/GBPUSD (stop pip)','Diğer (lot başına birim değeri)'],fa:['طلا XAUUSD (استاپ به دلار)','فارکس EURUSD/GBPUSD (استاپ به پیپ)','سایر (ارزش هر واحد در هر لات)'],ur:['سونا XAUUSD (اسٹاپ ڈالر میں)','فاریکس EURUSD/GBPUSD (اسٹاپ پپس میں)','دیگر (فی لاٹ فی یونٹ قدر)'],hi:['गोल्ड XAUUSD (स्टॉप $ में)','फॉरेक्स EURUSD/GBPUSD (स्टॉप पिप्स में)','अन्य (प्रति लॉट प्रति यूनिट मूल्य)']}[L]||[];
const SL={ar:['مسافة الوقف','$','نقاط','$ لكل وحدة'],en:['Stop distance','$','pips','$ per unit'],fr:['Distance du stop','$','pips','$ par unité'],es:['Distancia del stop','$','pips','$ por unidad'],tr:['Stop mesafesi','$','pip','birim başı $'],fa:['فاصله استاپ','$','پیپ','$ برای هر واحد'],ur:['اسٹاپ فاصلہ','$','پپس','$ فی یونٹ'],hi:['स्टॉप दूरी','$','पिप्स','$ प्रति यूनिट']}[L]||[];
const U={ar:['حجم الصفقة (لوت)','مبلغ المخاطرة','عدد الوحدات','قيمة لكل وحدة لكل لوت'],en:['Position size (lots)','Risk amount','Units','Value per unit per lot'],fr:['Taille (lots)','Montant risqué','Unités','Valeur par unité et lot'],es:['Tamaño (lotes)','Monto en riesgo','Unidades','Valor por unidad y lote'],tr:['Pozisyon (lot)','Risk tutarı','Birim','Lot başına birim değeri'],fa:['حجم معامله (لات)','مبلغ ریسک','واحد','ارزش هر واحد در هر لات'],ur:['پوزیشن (لاٹ)','رسک رقم','یونٹس','فی لاٹ فی یونٹ قدر'],hi:['पोजीशन (लॉट)','जोखिम राशि','यूनिट','प्रति लॉट प्रति यूनिट मूल्य']}[L]||[];
const sel=h('select',{id:'ct'},h('option',{value:100},IN[0]),h('option',{value:10},IN[1]),h('option',{value:1},IN[2]));
const stopL=h('label',{for:'sd'},SL[0]),stopI=h('input',{id:'sd',type:'text',inputmode:'decimal',value:'5'});
const cv=h('input',{id:'cv',type:'text',inputmode:'decimal',value:'1'}),cw=h('div',{style:'display:none'},h('label',{for:'cv'},U[3]),cv);
const f=[field(t('balance'),'bal',10000),field(t('riskPct'),'rp',1)];
const setL=()=>{const v=sel.value;stopL.textContent=SL[0]+' ('+(v=='100'?SL[1]:v=='10'?SL[2]:SL[1])+')';cw.style.display=v=='1'?'block':'none';if(v=='10'&&stopI.value=='5')stopI.value='20';if(v=='100'&&stopI.value=='20')stopI.value='5'};
const calc=()=>{setL();const b=num($('#bal').value),r=num($('#rp').value),s=num(stopI.value);let c=num(sel.value);if(sel.value=='1')c=num(cv.value);const risk=b*r/100;const lots=risk/(s*c);const ok=isFinite(lots)&&s>0&&c>0;out.textContent=ok?fmt(Math.floor(lots*100)/100,2):'-';sub.textContent=U[1]+': $'+fmt(risk,2);sub2.textContent=ok&&sel.value=='100'?U[2]+': '+fmt(Math.floor(lots*100)/100*100,0)+' oz | 0.01 lot = '+fmt(s*c*0.01,2)+'$':ok&&sel.value=='10'?'0.01 lot = $'+fmt(s*c*0.01,2):''};
const box=h('div',{class:'card',on:{input:calc,change:calc}},h('b',{},U[0]),...f,h('label',{},t('contract')),sel,cw,stopL,stopI,h('label',{},U[0]),out,sub,sub2);setTimeout(calc);return box}
function ddCalc(){const out=h('div',{});const calc=()=>{const b=num($('#b2').value),d=num($('#d2').value),m=num($('#m2').value);out.innerHTML='';[[t('dailyLimit'),b*d/100],[t('totalLimit'),b*m/100]].forEach(x=>out.append(h('div',{class:'row'},h('span',{},x[0]),h('b',{class:'res'},'$'+fmt(x[1],2)))))};
const box=h('div',{class:'card',on:{input:calc}},h('b',{},t('ddCalc')),field(t('balance'),'b2',100000),field(t('dailyDD'),'d2',5),field(t('maxDD'),'m2',10),out);setTimeout(calc);return box}
function rrCalc(){const out=h('div',{class:'res'},'-');const calc=()=>{const e=num($('#e3').value),s=num($('#s3').value),p=num($('#p3').value);const r=Math.abs(p-e)/Math.abs(e-s);out.textContent=isFinite(r)?'1 : '+fmt(r,2):'-'};
return h('div',{class:'card',on:{input:calc}},h('b',{},t('rr')),field(t('entry'),'e3',''),field(t('sl'),'s3',''),field(t('tp'),'p3',''),h('label',{},t('ratio')),out)}
function moreTab(el){el.append(h('h2',{},t('language')),h('div',{class:'card firm',on:{click:langPicker}},h('div',{class:'row'},h('span',{},LANGS[LI][1]),icon('globe'))),
h('button',{class:'btn',id:'inst',style:'display:'+(deferred?'block':'none'),on:{click:async()=>{if(deferred){deferred.prompt();deferred=null}}}},t('install')),
h('div',{class:'card mu'},t('installHint')),h('a',{class:'btn ghost',href:'privacy.html'},t('privacy')),h('p',{class:'warn'},t('disclaimer')),h('p',{class:'mu'},APP.name+' v'+APP.ver))}
/* trade sheet + analysis (shared, local only) */
const TQ=(s)=>{const o={};s.split('\n').forEach(l=>{if(!l.trim())return;const p=l.split('|');o[p[0]]=p.slice(1)});return o};
const TD=TQ(`trades|التحليل|Analysis|Analyse|Análisis|Analiz|تحلیل|تجزیہ|विश्लेषण
sheet|جدول الصفقات|Trade sheet|Feuille de trades|Hoja de trades|İşlem tablosu|جدول معاملات|ٹریڈ شیٹ|ट्रेड शीट
analysis|التحليل|Analysis|Analyse|Análisis|Analiz|تحلیل|تجزیہ|विश्लेषण
date|التاريخ|Date|Date|Fecha|Tarih|تاریخ|تاریخ|तारीख
sym|الرمز|Symbol|Symbole|Símbolo|Sembol|نماد|علامت|सिंबल
side|الاتجاه|Side|Sens|Lado|Yön|جهت|سمت|दिशा
buy|شراء|Buy|Achat|Compra|Al|خرید|خرید|खरीद
sell|بيع|Sell|Vente|Venta|Sat|فروش|فروخت|बिक्री
entry|الدخول|Entry|Entrée|Entrada|Giriş|ورود|انٹری|एंट्री
stop|الوقف|Stop|Stop|Stop|Stop|استاپ|اسٹاپ|स्टॉप
exit|الخروج|Exit|Sortie|Salida|Çıkış|خروج|ایگزٹ|एग्जिट
pl|ربح/خسارة ($) اختياري|P/L ($) optional|G/P ($) optionnel|G/P ($) opcional|K/Z ($) isteğe bağlı|سود/زیان ($) اختیاری|منافع/نقصان ($) اختیاری|लाभ/हानि ($) वैकल्पिक
res|النتيجة|Result|Résultat|Resultado|Sonuç|نتیجه|نتیجہ|नतीजा
chk|قائمة|Checklist|Checklist|Lista|Liste|چک‌لیست|چیک لسٹ|चेकलिस्ट
note|ملاحظة|Note|Note|Nota|Not|یادداشت|نوٹ|नोट
win|ربح|Win|Gain|Ganada|Kazanç|برد|جیت|जीत
loss|خسارة|Loss|Perte|Pérdida|Kayıp|باخت|ہار|हार
be|تعادل|Break-even|Neutre|Neutra|Başabaş|سربه‌سر|برابر|ब्रेकईवन
open|مفتوحة|Open|Ouverte|Abierta|Açık|باز|کھلی|खुली
add|+ صف جديد|+ Add row|+ Ligne|+ Fila|+ Satır|+ ردیف|+ قطار|+ पंक्ति
csv|تصدير CSV|Export CSV|Exporter CSV|Exportar CSV|CSV dışa aktar|خروجی CSV|CSV ایکسپورٹ|CSV एक्सपोर्ट
xlsx|تصدير Excel (XLSX)|Export Excel (XLSX)|Exporter Excel (XLSX)|Exportar Excel (XLSX)|Excel dışa aktar (XLSX)|خروجی Excel (XLSX)|Excel ایکسپورٹ (XLSX)|Excel एक्सपोर्ट (XLSX)
clear|مسح كل الصفوف|Clear all rows|Tout effacer|Borrar todo|Tümünü sil|پاک کردن همه|سب مٹائیں|सब मिटाएँ
sure|متأكد؟ هيتمسح كل حاجة من الجهاز.|Sure? This deletes everything on this device.|Sûr ? Tout sera supprimé de cet appareil.|¿Seguro? Se borra todo en este dispositivo.|Emin misin? Bu cihazdaki her şey silinir.|مطمئنی؟ همه چیز از این دستگاه پاک می‌شود.|یقین ہے؟ اس ڈیوائس سے سب کچھ مٹ جائے گا۔|पक्का? इस डिवाइस से सब मिट जाएगा।
rem|تذكيراتي|My reminders|Mes rappels|Mis recordatorios|Hatırlatmalarım|یادآوری‌های من|میری یاد دہانیاں|मेरे अनुस्मारक
remE|عدّل تذكيراتك (سطر لكل تذكير)|Edit your reminders (one per line)|Modifiez vos rappels (un par ligne)|Edita tus recordatorios (uno por línea)|Hatırlatmalarını düzenle (satır başına bir)|یادآوری‌هایت را ویرایش کن (هر خط یکی)|اپنی یاد دہانیاں ایڈٹ کریں (ہر لائن میں ایک)|अपने अनुस्मारक बदलें (हर लाइन में एक)
r1|قبل الدخول: الدخول والوقف والهدف محددين|Before entry: entry, stop and target are set|Avant l'entrée : entrée, stop et objectif définis|Antes de entrar: entrada, stop y objetivo definidos|Girişten önce: giriş, stop ve hedef belirli|پیش از ورود: ورود، استاپ و هدف مشخص است|انٹری سے پہلے: انٹری، اسٹاپ اور ہدف طے|एंट्री से पहले: एंट्री, स्टॉप और टारगेट तय
r2|راجع حدود الخسارة اليومية والإجمالية للحساب|Check the account's daily and max loss limits|Vérifier les limites de perte quotidienne et maximale|Revisa los límites de pérdida diaria y máxima|Hesabın günlük ve maks. kayıp limitlerini kontrol et|حدود ضرر روزانه و کل حساب را بررسی کن|روزانہ اور زیادہ سے زیادہ نقصان کی حدیں دیکھیں|दैनिक और अधिकतम हानि सीमा देखें
r3|سجّل الصفقة بعد القفل بأرقامها الحقيقية|Log the trade with its real numbers after closing|Enregistrer le trade avec ses vrais chiffres après clôture|Registra la operación con sus números reales al cerrar|Kapanışta işlemi gerçek rakamlarla kaydet|پس از بستن، معامله را با اعداد واقعی ثبت کن|بند ہونے پر ٹریڈ اصل اعداد کے ساتھ درج کریں|बंद होने पर ट्रेड असली आँकड़ों के साथ दर्ज करें
maxl|أقصى عدد خسائر في اليوم (اختياري)|Max losses per day (optional)|Pertes max par jour (optionnel)|Pérdidas máx. por día (opcional)|Günlük maks. kayıp sayısı (isteğe bağlı)|حداکثر تعداد ضرر در روز (اختیاری)|یومیہ زیادہ سے زیادہ نقصانات (اختیاری)|प्रतिदिन अधिकतम हानि (वैकल्पिक)
maxh|وصلت لعدد الخسائر اللي حددته النهارده|You reached the loss count you set for today|Vous avez atteint le nombre de pertes fixé pour aujourd'hui|Alcanzaste el número de pérdidas que fijaste para hoy|Bugün için belirlediğin kayıp sayısına ulaştın|امروز به تعداد ضرری که تعیین کردی رسیدی|آج کے لیے مقرر نقصانات کی تعداد تک پہنچ گئے|आज के लिए तय हानि गिनती तक पहुँच गए
n|عدد الصفقات المقفولة|Closed trades|Trades clôturés|Operaciones cerradas|Kapanan işlemler|معاملات بسته|بند ٹریڈز|बंद ट्रेड
wr|نسبة النجاح|Win rate|Taux de réussite|% de aciertos|Kazanma oranı|نرخ موفقیت|کامیابی کی شرح|जीत दर
fr|نسبة الفشل|Fail rate|Taux d'échec|% de fallos|Kayıp oranı|نرخ شکست|ناکامی کی شرح|हार दर
avgR|متوسط R|Average R|R moyen|R medio|Ortalama R|میانگین R|اوسط R|औसत R
totR|إجمالي R|Total R|R total|R total|Toplam R|مجموع R|کل R|कुल R
bestR|أفضل R|Best R|Meilleur R|Mejor R|En iyi R|بهترین R|بہترین R|सर्वश्रेष्ठ R
worstR|أسوأ R|Worst R|Pire R|Peor R|En kötü R|بدترین R|بدترین R|सबसे खराब R
pf|معامل الربحية|Profit factor|Facteur de profit|Factor de beneficio|Kâr faktörü|ضریب سود|پرافٹ فیکٹر|प्रॉफिट फैक्टर
avgW|متوسط الربح (R)|Avg win (R)|Gain moyen (R)|Ganancia media (R)|Ort. kazanç (R)|میانگین برد (R)|اوسط جیت (R)|औसत जीत (R)
avgL|متوسط الخسارة (R)|Avg loss (R)|Perte moyenne (R)|Pérdida media (R)|Ort. kayıp (R)|میانگین باخت (R)|اوسط ہار (R)|औसत हार (R)
streak|أطول سلسلة خسائر|Longest losing streak|Plus longue série de pertes|Racha perdedora máxima|En uzun kayıp serisi|طولانی‌ترین سری باخت|سب سے لمبی ہار کی لڑی|सबसे लंबी हार की श्रृंखला
totPL|إجمالي ($) المُدخل|Total P/L ($) entered|G/P total ($) saisi|G/P total ($) ingresado|Girilen toplam K/Z ($)|مجموع سود/زیان ($) واردشده|درج کل منافع/نقصان ($)|दर्ज कुल लाभ/हानि ($)
curve|منحنى R التراكمي|Cumulative R curve|Courbe R cumulée|Curva de R acumulada|Kümülatif R eğrisi|منحنی R تجمعی|مجموعی R منحنی|संचयी R वक्र
bySide|حسب الاتجاه|By side|Par sens|Por lado|Yöne göre|بر اساس جهت|سمت کے لحاظ سے|दिशा के अनुसार
bySym|حسب الرمز|By symbol|Par symbole|Por símbolo|Sembole göre|بر اساس نماد|علامت کے لحاظ سے|सिंबल के अनुसार
byChk|مع القائمة / بدونها|With / without checklist|Avec / sans checklist|Con / sin lista|Listeli / listesiz|با / بدون چک‌لیست|چیک لسٹ کے ساتھ / بغیر|चेकलिस्ट के साथ / बिना
none|لسه مفيش صفقات مقفولة. اكتب الدخول والوقف والخروج في الجدول.|No closed trades yet. Enter entry, stop and exit in the sheet.|Aucun trade clôturé. Saisissez entrée, stop et sortie dans la feuille.|Aún no hay operaciones cerradas. Ingresa entrada, stop y salida en la hoja.|Henüz kapanan işlem yok. Tabloya giriş, stop ve çıkış gir.|هنوز معامله بسته‌ای نیست. ورود، استاپ و خروج را در جدول وارد کن.|ابھی کوئی بند ٹریڈ نہیں۔ شیٹ میں انٹری، اسٹاپ اور ایگزٹ لکھیں۔|अभी कोई बंद ट्रेड नहीं। शीट में एंट्री, स्टॉप और एग्जिट भरें।
note1|الحسابات على أرقامك أنت بس ومحفوظة على جهازك فقط. دي أرقام مش توصيات.|Calculated only from your own entries and stored only on this device. Numbers, not recommendations.|Calculé uniquement à partir de vos saisies, stocké sur cet appareil. Des chiffres, pas des recommandations.|Calculado solo con tus datos, guardado solo en este dispositivo. Números, no recomendaciones.|Yalnızca kendi girdilerinden hesaplanır, sadece bu cihazda saklanır. Rakamlardır, öneri değil.|فقط از ورودی‌های خودت محاسبه و فقط روی این دستگاه ذخیره می‌شود. عدد است، توصیه نیست.|صرف آپ کے اپنے اندراجات سے، صرف اسی ڈیوائس پر۔ اعداد ہیں، سفارش نہیں۔|केवल आपकी अपनी एंट्रियों से, सिर्फ इसी डिवाइस पर। आँकड़े हैं, सिफारिश नहीं।
hint|R = (الخروج − الدخول) ÷ (الدخول − الوقف) والاتجاه محسوب تلقائي. لو كتبت ربح/خسارة ($) هي اللي تحدد ربح أو خسارة.|R = (exit − entry) ÷ (entry − stop), direction handled automatically. If you enter P/L ($), it decides win or loss.|R = (sortie − entrée) ÷ (entrée − stop), sens géré automatiquement. Si vous saisissez G/P ($), il décide gain ou perte.|R = (salida − entrada) ÷ (entrada − stop), dirección automática. Si ingresas G/P ($), decide ganada o perdida.|R = (çıkış − giriş) ÷ (giriş − stop), yön otomatik. K/Z ($) girersen kazanç/kayıp onunla belirlenir.|R = (خروج − ورود) ÷ (ورود − استاپ)، جهت خودکار. اگر سود/زیان ($) بنویسی، همان برد یا باخت را تعیین می‌کند.|R = (ایگزٹ − انٹری) ÷ (انٹری − اسٹاپ)، سمت خودکار۔ منافع/نقصان ($) لکھیں تو وہی جیت/ہار طے کرتا ہے۔|R = (एग्जिट − एंट्री) ÷ (एंट्री − स्टॉप), दिशा अपने आप। लाभ/हानि ($) भरें तो वही जीत/हार तय करता है।`);
const TZ=k=>{const a=TD[k];return a?(a[LI]||a[1]):k};
T.trades=TD.trades;IC.trades='<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 15l3-4 3 2 5-7"/>';
const TKEY=()=>APP.id+'_sheet',RKEY=()=>APP.id+'_rem',MKEY=()=>APP.id+'_maxl';
const tget=()=>{try{return JSON.parse(localStorage.getItem(TKEY())||'[]')}catch(e){return[]}};
const tset=a=>localStorage.setItem(TKEY(),JSON.stringify(a));
function tcalc(r){const e=num(r.e),s=num(r.sl),x=num(r.x),p=num(r.p);let R=NaN;if(isFinite(e)&&isFinite(s)&&isFinite(x)&&e!==s){R=(x-e)/(e-s);if(r.sd==='S')R=(e-x)/(s-e);}
let out=null;if(isFinite(p)&&r.p!==''&&r.p!=null)out=p>0?'win':p<0?'loss':'be';else if(isFinite(R))out=R>0?'win':R<0?'loss':'be';return{R,out}}
function tstats(rows){const c=rows.map(r=>({r,k:tcalc(r)})).filter(o=>o.k.out);const n=c.length,w=c.filter(o=>o.k.out==='win'),l=c.filter(o=>o.k.out==='loss');const Rs=c.filter(o=>isFinite(o.k.R)).map(o=>o.k.R);const sum=a=>a.reduce((x,y)=>x+y,0);
const wR=w.filter(o=>isFinite(o.k.R)).map(o=>o.k.R),lR=l.filter(o=>isFinite(o.k.R)).map(o=>o.k.R);let st=0,mx=0;c.forEach(o=>{if(o.k.out==='loss'){st++;mx=Math.max(mx,st)}else st=0});
const pls=c.map(o=>num(o.r.p)).filter(isFinite);
return{c,n,w:w.length,l:l.length,be:n-w.length-l.length,wr:n?w.length/n*100:NaN,fr:n?l.length/n*100:NaN,avgR:Rs.length?sum(Rs)/Rs.length:NaN,totR:Rs.length?sum(Rs):NaN,best:Rs.length?Math.max(...Rs):NaN,worst:Rs.length?Math.min(...Rs):NaN,pf:lR.length&&sum(lR)<0?sum(wR)/-sum(lR):NaN,avgW:wR.length?sum(wR)/wR.length:NaN,avgL:lR.length?sum(lR)/lR.length:NaN,streak:mx,pl:pls.length?sum(pls):NaN}}
const rp=(a,b)=>{const g=a.length+b.length;return g?'%'.length&&fmt(a.filter(o=>o.k.out==='win').length/Math.max(1,a.length)*100,0)+'% ('+a.length+')':'-'};
function crc32(u){let c,crc=-1;if(!crc32.t){crc32.t=[];for(let n=0;n<256;n++){c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;crc32.t[n]=c>>>0}}for(let i=0;i<u.length;i++)crc=crc32.t[(crc^u[i])&255]^(crc>>>8);return(crc^-1)>>>0}
function zipStore(files){const E=new TextEncoder(),parts=[],cd=[];let off=0;const w16=(a,v)=>a.push(v&255,v>>8&255),w32=(a,v)=>a.push(v&255,v>>8&255,v>>16&255,v>>>24&255);
files.forEach(([name,txt])=>{const nb=E.encode(name),d=E.encode(txt),cr=crc32(d);const lh=[];w32(lh,0x04034b50);w16(lh,20);w16(lh,0x0800);w16(lh,0);w16(lh,0);w16(lh,0x21);w32(lh,cr);w32(lh,d.length);w32(lh,d.length);w16(lh,nb.length);w16(lh,0);parts.push(new Uint8Array(lh),nb,d);
const ch=[];w32(ch,0x02014b50);w16(ch,20);w16(ch,20);w16(ch,0x0800);w16(ch,0);w16(ch,0);w16(ch,0x21);w32(ch,cr);w32(ch,d.length);w32(ch,d.length);w16(ch,nb.length);w16(ch,0);w16(ch,0);w16(ch,0);w16(ch,0);w32(ch,0);w32(ch,off);cd.push(new Uint8Array(ch),nb);off+=lh.length+nb.length+d.length});
let cs=0;cd.forEach(x=>cs+=x.length);const en=[];w32(en,0x06054b50);w16(en,0);w16(en,0);w16(en,files.length);w16(en,files.length);w32(en,cs);w32(en,off);w16(en,0);return new Blob([...parts,...cd,new Uint8Array(en)],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
const xe=s=>String(s).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c])).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
function tgrid(rows){const hd=['Date','Symbol','Side','Entry','Stop','Exit','P/L $','R','Result','Checklist','Note'];return [hd].concat(rows.map(r=>{const k=tcalc(r);return[r.d||'',r.s||'',r.sd==='S'?'Sell':'Buy',num(r.e),num(r.sl),num(r.x),r.p===''||r.p==null?'':num(r.p),isFinite(k.R)?+k.R.toFixed(3):'',k.out?{win:'Win',loss:'Loss',be:'Break-even'}[k.out]:'Open',r.c?'yes':'no',r.n||'']}))}
function dl(blob,name){const a=h('a',{href:URL.createObjectURL(blob),download:name});document.body.append(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500)}
function exportCSV(rows){const q=v=>{v=v==null||(typeof v==='number'&&!isFinite(v))?'':String(v);return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v};dl(new Blob(['\ufeff'+tgrid(rows).map(r=>r.map(q).join(',')).join('\n')],{type:'text/csv'}),APP.id+'-trades.csv')}
function exportXLSX(rows){const g=tgrid(rows),col=i=>String.fromCharCode(65+i);const sd=g.map((r,ri)=>'<row r="'+(ri+1)+'">'+r.map((v,ci)=>{const ref=col(ci)+(ri+1);if(typeof v==='number'&&isFinite(v))return'<c r="'+ref+'"><v>'+v+'</v></c>';if(v===''||v==null||typeof v==='number')return'';return'<c r="'+ref+'" t="inlineStr"><is><t>'+xe(v)+'</t></is></c>'}).join('')+'</row>').join('');
dl(zipStore([['[Content_Types].xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>'],['_rels/.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'],['xl/workbook.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Trades" sheetId="1" r:id="rId1"/></sheets></workbook>'],['xl/_rels/workbook.xml.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>'],['xl/worksheets/sheet1.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'+sd+'</sheetData></worksheet>']]),APP.id+'-trades.xlsx')}
function remindersCard(rows){const dflt=[TZ('r1'),TZ('r2'),TZ('r3')];let saved=localStorage.getItem(RKEY());const list=()=>(saved==null?dflt:saved.split('\n').filter(x=>x.trim()));
const body=h('div'),ta=h('textarea',{rows:'4',style:'display:none;width:100%'}),ml=h('input',{type:'text',inputmode:'numeric',value:localStorage.getItem(MKEY())||'',style:'max-width:90px'});
const draw=()=>{body.innerHTML='';list().forEach(x=>body.append(h('div',{class:'row',style:'justify-content:flex-start;gap:8px;padding:5px 0'},h('span',{style:'color:var(--gold)'},'●'),h('span',{dir:'auto'},x))));const m=num(ml.value),today=new Date().toISOString().slice(0,10);if(m>0){const lc=rows().filter(r=>r.d===today&&tcalc(r).out==='loss').length;if(lc>=m)body.append(h('p',{class:'warn',style:'border:1px solid var(--bad);border-radius:10px;padding:8px'},TZ('maxh')+' ('+lc+'/'+m+')'))}};
const ed=h('button',{class:'btn ghost',style:'font-size:12px;padding:8px',on:{click:()=>{if(ta.style.display==='none'){ta.value=list().join('\n');ta.style.display='block'}else{saved=ta.value;localStorage.setItem(RKEY(),saved);ta.style.display='none';draw()}}}},'✎ '+TZ('remE'));
ml.oninput=()=>{localStorage.setItem(MKEY(),ml.value);draw()};draw();const card=h('div',{class:'card'},h('b',{},TZ('rem')),body,ta,ed,h('label',{},TZ('maxl')),ml);card.redraw=draw;return card}
function sheetView(el,rowsRef){let rows=tget();const get=()=>rows;const rem=remindersCard(get);const tb=h('tbody');const stat=h('div',{class:'mu',dir:'ltr',style:'margin:6px 0'});
const upd=()=>{const s=tstats(rows);stat.textContent=TZ('n')+': '+s.n+' | '+TZ('wr')+': '+(isFinite(s.wr)?fmt(s.wr,0)+'%':'-')+' | '+TZ('fr')+': '+(isFinite(s.fr)?fmt(s.fr,0)+'%':'-')+' | '+TZ('avgR')+': '+fmt(s.avgR,2);rem.redraw()};
const inp=(r,k,w,ph)=>h('input',{type:'text',inputmode:k==='d'||k==='s'||k==='n'?'text':'decimal',value:r[k]==null?'':r[k],style:'width:'+w+'px;padding:8px 6px;font-size:13px',placeholder:ph||'',dir:'auto',on:{input:e=>{r[k]=e.target.value;tset(rows);cell(r)}}});
const cells=new Map();const cell=r=>{const c=cells.get(r);if(!c)return;const k=tcalc(r);c.R.textContent=isFinite(k.R)?fmt(k.R,2):'-';c.R.className=k.out==='win'?'pos':k.out==='loss'?'neg':'';c.o.textContent=k.out?TZ(k.out):TZ('open');c.o.className=k.out==='win'?'pos':k.out==='loss'?'neg':'mu';upd()};
const addRow=r=>{const sd=h('select',{style:'padding:8px 4px;font-size:13px',on:{change:e=>{r.sd=e.target.value;tset(rows);cell(r)}}},h('option',{value:'B'},TZ('buy')),h('option',{value:'S'},TZ('sell')));sd.value=r.sd||'B';
const R=h('td',{dir:'ltr',style:'font-weight:700'}),o=h('td',{style:'font-weight:700;white-space:nowrap'});cells.set(r,{R,o});
const ck=h('input',{type:'checkbox',style:'width:auto',on:{change:e=>{r.c=e.target.checked;tset(rows);upd()}}});ck.checked=!!r.c;
const tr=h('tr',{},h('td',{},inp(r,'d',96)),h('td',{},inp(r,'s',78)),h('td',{},sd),h('td',{},inp(r,'e',78)),h('td',{},inp(r,'sl',78)),h('td',{},inp(r,'x',78)),h('td',{},inp(r,'p',78)),R,o,h('td',{},ck),h('td',{},inp(r,'n',120)),h('td',{},h('button',{class:'del',on:{click:()=>{rows=rows.filter(z=>z!==r);tset(rows);tr.remove();upd()}}},'×')));tb.append(tr);cell(r)};
rows.forEach(addRow);
const head=h('tr',{},...['date','sym','side','entry','stop','exit','pl','','res','chk','note'].map(k=>h('th',{style:'white-space:nowrap;padding:6px'},k===''?'R':TZ(k))),h('th'));
const table=h('table',{class:'cmp',style:'min-width:980px'},h('thead',{},head),tb);
const add=h('button',{class:'btn',on:{click:()=>{const r={d:new Date().toISOString().slice(0,10),s:'XAUUSD',sd:'B',e:'',sl:'',x:'',p:'',c:false,n:''};rows.push(r);tset(rows);addRow(r);upd()}}},TZ('add'));
el.append(rem,h('div',{style:'overflow-x:auto;direction:ltr;border:1px solid var(--line);border-radius:12px;margin:10px 0'},table),stat,add,h('div',{class:'grid2'},h('button',{class:'btn ghost',on:{click:()=>exportCSV(rows)}},TZ('csv')),h('button',{class:'btn ghost',on:{click:()=>exportXLSX(rows)}},TZ('xlsx'))),h('p',{class:'mu',dir:'auto'},TZ('hint')),h('p',{class:'warn',dir:'auto'},TZ('note1')),h('button',{class:'btn ghost',style:'color:var(--bad)',on:{click:()=>{if(confirm(TZ('sure'))){rows=[];tset(rows);location.reload()}}}},TZ('clear')));upd()}
function analysisView(el){const rows=tget(),s=tstats(rows);if(!s.n){el.append(h('div',{class:'card mu',dir:'auto'},TZ('none')),h('p',{class:'warn',dir:'auto'},TZ('note1')));return}
const kv=(k,v,cls)=>h('div',{class:'row',style:'padding:6px 0;border-bottom:1px solid var(--line)'},h('span',{class:'mu'},TZ(k)),h('b',{dir:'ltr',class:cls||''},v));
const pc=v=>isFinite(v)?fmt(v,1)+'%':'-',rr=v=>isFinite(v)?fmt(v,2)+'R':'-';
el.append(h('div',{class:'card'},h('div',{class:'grid2'},h('div',{},h('div',{class:'mu'},TZ('wr')),h('div',{class:'res pos',dir:'ltr'},pc(s.wr))),h('div',{},h('div',{class:'mu'},TZ('fr')),h('div',{class:'res neg',dir:'ltr'},pc(s.fr)))),
h('div',{class:'bar',style:'margin:10px 0'},h('i',{style:'width:'+(s.wr||0)+'%'})),
kv('n',s.n+'  ('+s.w+' '+TZ('win')+' / '+s.l+' '+TZ('loss')+(s.be?' / '+s.be+' '+TZ('be'):'')+')'),kv('avgR',rr(s.avgR),s.avgR>0?'pos':s.avgR<0?'neg':''),kv('totR',rr(s.totR),s.totR>0?'pos':s.totR<0?'neg':''),kv('avgW',rr(s.avgW)),kv('avgL',rr(s.avgL)),kv('pf',isFinite(s.pf)?fmt(s.pf,2):'-'),kv('bestR',rr(s.best)),kv('worstR',rr(s.worst)),kv('streak',String(s.streak)),isFinite(s.pl)?kv('totPL','$'+fmt(s.pl,2),s.pl>=0?'pos':'neg'):''));
// curve
let cum=0;const pts=[0].concat(s.c.filter(o=>isFinite(o.k.R)).map(o=>cum+=o.k.R));if(pts.length>1){const W=340,H=130,mn=Math.min(...pts),mx=Math.max(...pts),sp=(mx-mn)||1;const X=i=>10+i*(W-20)/(pts.length-1),Y=v=>H-12-(v-mn)/sp*(H-24);const ns='http://www.w3.org/2000/svg';const sv=document.createElementNS(ns,'svg');sv.setAttribute('viewBox','0 0 '+W+' '+H);sv.style.cssText='width:100%;height:auto;stroke:none;fill:none';
sv.innerHTML='<line x1="10" x2="'+(W-10)+'" y1="'+Y(0)+'" y2="'+Y(0)+'" stroke="#888" stroke-dasharray="3 3" stroke-width="1"/><polyline fill="none" stroke="#d4af37" stroke-width="2.5" stroke-linejoin="round" points="'+pts.map((v,i)=>X(i).toFixed(1)+','+Y(v).toFixed(1)).join(' ')+'"/>';el.append(h('div',{class:'card'},h('b',{},TZ('curve')),h('div',{style:'direction:ltr'},sv)))}
const grp=(title,keys,f)=>{const box=h('div',{class:'card'},h('b',{},title));keys.forEach(k=>{const g=s.c.filter(o=>f(o)===k.v);box.append(h('div',{class:'row',style:'padding:6px 0;border-bottom:1px solid var(--line)'},h('span',{dir:'auto'},k.l),h('b',{dir:'ltr'},g.length?pc(g.filter(o=>o.k.out==='win').length/g.length*100)+' ('+g.length+')':'-')))});return box};
const syms=[...new Set(s.c.map(o=>(o.r.s||'-').toUpperCase()))].slice(0,12);
el.append(grp(TZ('bySide')+' ('+TZ('wr')+')',[{v:'B',l:TZ('buy')},{v:'S',l:TZ('sell')}],o=>o.r.sd==='S'?'S':'B'),grp(TZ('bySym')+' ('+TZ('wr')+')',syms.map(x=>({v:x,l:x})),o=>(o.r.s||'-').toUpperCase()),grp(TZ('byChk')+' ('+TZ('wr')+')',[{v:true,l:TZ('chk')+' ✓'},{v:false,l:TZ('chk')+' ✗'}],o=>!!o.r.c),h('p',{class:'warn',dir:'auto'},TZ('note1')))}
function tradesTab(el,arg){const seg=h('div',{class:'grid2',style:'margin-bottom:10px'},h('a',{class:'btn'+(arg==='a'?' ghost':''),href:'#/trades'},TZ('sheet')),h('a',{class:'btn'+(arg==='a'?'':' ghost'),href:'#/trades/a'},TZ('analysis')));el.append(seg);arg==='a'?analysisView(el):sheetView(el)}

/* shell */

const NW={h:{ar:'آخر الأخبار',en:'Latest news',fr:'Dernières actualités',es:'Últimas noticias',tr:'Son haberler',fa:'آخرین اخبار',ur:'تازہ خبریں',hi:'ताज़ा खबरें'},src:{ar:'المصدر',en:'Source',fr:'Source',es:'Fuente',tr:'Kaynak',fa:'منبع',ur:'ماخذ',hi:'स्रोत'},high:{ar:'تأثير عالي',en:'High impact',fr:'Impact fort',es:'Impacto alto',tr:'Yüksek etki',fa:'تأثیر بالا',ur:'زیادہ اثر',hi:'उच्च प्रभाव'},med:{ar:'تأثير متوسط',en:'Medium impact',fr:'Impact moyen',es:'Impacto medio',tr:'Orta etki',fa:'تأثیر متوسط',ur:'درمیانی اثر',hi:'मध्यम प्रभाव'},low:{ar:'تأثير منخفض',en:'Low impact',fr:'Impact faible',es:'Impacto bajo',tr:'Düşük etki',fa:'تأثیر کم',ur:'کم اثر',hi:'कम प्रभाव'}};
async function newsView(el,max){let D;try{const r=await fetch('news.json?'+Date.now());if(!r.ok)return;D=await r.json()}catch(e){return}
const it=(D.items||[]).filter(x=>x&&x.title&&x.src&&/^https?:\/\//.test(x.url||'')).sort((a,b)=>String(b.time).localeCompare(String(a.time))).slice(0,max||5);if(!it.length)return;
const Z=k=>(NW[k][L]||NW[k].en);const box=h('div',{},h('h2',{},Z('h')));
it.forEach(x=>{const tm=x.time?new Date(x.time):null;box.append(h('a',{class:'card news',href:x.url,target:'_blank',rel:'noopener'},h('div',{class:'row'},h('span',{class:'tag '+(x.impact||'low')},Z(x.impact in NW?x.impact:'low')),h('span',{class:'mu',dir:'ltr'},tm&&isFinite(tm)?tm.toLocaleString(L==='ar'?'en':L,{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}):'')),h('div',{class:'nt',dir:'auto'},x.title),x.gist?h('div',{class:'mu',dir:'auto'},x.gist):'',h('div',{class:'mu',dir:'auto'},Z('src')+': '+x.src)))});
return box}
function boot(){const v=h('main',{id:'view'});document.body.prepend(h('header',{},h('img',{class:'logo',src:APP.id+'-icon.svg',alt:''}),h('h1',{},APP.name),h('button',{class:'iconbtn','aria-label':t('language'),on:{click:langPicker}},icon('globe'),L.toUpperCase())),v);
const nav=h('nav');document.body.append(nav);
APP.tabs.forEach(x=>nav.append(h('a',{href:'#/'+x.id,'data-id':x.id},icon(x.icon||x.id),t(x.key||x.id))));
const go=()=>{const id=(location.hash.match(/^#\/([^/]+)(?:\/(.*))?/)||[])[1]||APP.tabs[0].id,arg=(location.hash.match(/^#\/[^/]+\/(.*)/)||[])[1];const tab=APP.tabs.find(x=>x.id===id)||APP.tabs[0];nav.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.dataset.id===tab.id));v.innerHTML='';tab.render(v,decodeURIComponent(arg||''));scrollTo(0,0)};
addEventListener('hashchange',go);go();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');}
