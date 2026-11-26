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
/* shell */
function boot(){const v=h('main',{id:'view'});document.body.prepend(h('header',{},h('img',{class:'logo',src:APP.id+'-icon.svg',alt:''}),h('h1',{},APP.name),h('button',{class:'iconbtn','aria-label':t('language'),on:{click:langPicker}},icon('globe'),L.toUpperCase())),v);
const nav=h('nav');document.body.append(nav);
APP.tabs.forEach(x=>nav.append(h('a',{href:'#/'+x.id,'data-id':x.id},icon(x.icon||x.id),t(x.key||x.id))));
const go=()=>{const id=(location.hash.match(/^#\/([^/]+)(?:\/(.*))?/)||[])[1]||APP.tabs[0].id,arg=(location.hash.match(/^#\/[^/]+\/(.*)/)||[])[1];const tab=APP.tabs.find(x=>x.id===id)||APP.tabs[0];nav.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.dataset.id===tab.id));v.innerHTML='';tab.render(v,decodeURIComponent(arg||''));scrollTo(0,0)};
addEventListener('hashchange',go);go();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');}
