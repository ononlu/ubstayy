/* UBSTAY translations (English / Mongolian / Russian).
   The English text in index.html is the "key". To change a translation, edit the line below. */
(function () {
  'use strict';
  const LANGS = ['en', 'mn', 'ru'];
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const D = {};
  const add = (en, mn, ru) => { D[norm(en)] = { mn, ru }; };
  const ruPlural = (n, one, few, many) => { const a = n % 10, b = n % 100; return (a === 1 && b !== 11) ? one : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? few : many; };

  /* ----- Page ----- */
  add('UBStay — Apartments in Ulaanbaatar', 'UBStay — Улаанбаатар дахь байрууд', 'UBStay — Апартаменты в Улан-Баторе');
  add('Language', 'Хэл', 'Язык');
  add('View apartment →', 'Байрыг үзэх →', 'Смотреть апартаменты →');
  add('Contact us', 'Бидэнтэй холбогдох', 'Связаться с нами');
  add('UBStay, back to homepage', 'UBStay, нүүр хуудас руу буцах', 'UBStay, на главную');
  add('Online booking is temporarily unavailable. Please contact us on WhatsApp or Viber to book.', 'Онлайн захиалга түр боломжгүй байна. Захиалахын тулд WhatsApp эсвэл Viber-ээр бидэнтэй холбогдоно уу.', 'Онлайн-бронирование временно недоступно. Для бронирования свяжитесь с нами в WhatsApp или Viber.');
  add('Online booking is temporarily unavailable. Please contact us on WhatsApp or Viber.', 'Онлайн захиалга түр боломжгүй байна. WhatsApp эсвэл Viber-ээр бидэнтэй холбогдоно уу.', 'Онлайн-бронирование временно недоступно. Свяжитесь с нами в WhatsApp или Viber.');
  add('Stay somewhere that feels like yours.', 'Гэртээ байгаа мэт тайван амраарай.', 'Место, где вы чувствуете себя как дома.');
  add('Quiet, cozy, and well-kept apartments across Ulaanbaatar for a weekend or a month. Pick your dates and book in a minute.', 'Улаанбаатар хотын нам гүм, тохилог, цэвэрхэн байрууд — амралтын хоёр хоногт ч, сараар ч болно. Огноогоо сонгоод минутын дотор захиалаарай.', 'Тихие, уютные и ухоженные апартаменты в Улан-Баторе — на выходные или на месяц. Выберите даты и забронируйте за минуту.');
  add('Check-in', 'Ирэх өдөр', 'Заезд');
  add('Check-out', 'Явах өдөр', 'Выезд');
  add('Guests', 'Зочид', 'Гости');
  add('Search stays', 'Байр хайх', 'Найти жильё');
  add('Apartments across Ulaanbaatar', 'Улаанбаатар хот дахь байрууд', 'Апартаменты по всему Улан-Батору');
  add('Select a pin on the map to see the apartment.', 'Газрын зураг дээрх тэмдэглэгээг дарж байрыг харна уу.', 'Нажмите на метку на карте, чтобы увидеть апартаменты.');
  add('Map of apartments', 'Байруудын газрын зураг', 'Карта апартаментов');
  add('All apartments', 'Бүх байр', 'Все апартаменты');
  add('Filter apartments by size', 'Байрыг хэмжээгээр шүүх', 'Фильтр по размеру');
  add('All', 'Бүгд', 'Все');
  add('Studio', 'Студи', 'Студия');
  add('1 bedroom', '1 унтлагын өрөө', '1 спальня');
  add('2 bedrooms', '2 унтлагын өрөө', '2 спальни');
  add('No apartments in this category yet.', 'Энэ ангилалд одоогоор байр алга.', 'В этой категории пока нет апартаментов.');
  add('No apartments are free for those dates and guests.', 'Эдгээр өдөр, зочдын тоонд сул байр алга.', 'На эти даты и количество гостей свободных апартаментов нет.');
  add('Guest favourite', 'Зочдын дуртай', 'Выбор гостей');
  add('New', 'Шинэ', 'Новинка');
  add('per night', 'нэг шөнө', 'за ночь');
  add('Clear prices', 'Ойлгомжтой үнэ', 'Прозрачные цены');
  add('The price you see includes cleaning and fees. No surprises at checkout.', 'Таны харж буй үнэд цэвэрлэгээ, төлбөр шимтгэл багтсан. Төлбөр хийхдээ гэнэтийн нэмэлт зардал гарахгүй.', 'В указанную цену входят уборка и сборы. Никаких сюрпризов при оплате.');
  add('Free cancellation', 'Үнэгүй цуцлалт', 'Бесплатная отмена');
  add('Change your plans up to 48 hours before check-in and get a full refund.', 'Ирэхээс 48 цагийн өмнө төлөвлөгөөгөө өөрчилбөл төлбөрөө бүрэн буцаан авна.', 'Измените планы не позднее чем за 48 часов до заезда и получите полный возврат.');
  add('Self check-in', 'Өөрөө орох', 'Самостоятельное заселение');
  add('Get your door code by message on arrival day. No keys to collect.', 'Ирэх өдөр хаалганы кодыг мессежээр илгээнэ. Түлхүүр авах шаардлагагүй.', 'В день заезда мы пришлём код от двери сообщением. Ключи забирать не нужно.');
  add('← Back to all stays', '← Бүх байр руу буцах', '← Ко всем апартаментам');
  add('Photos of this apartment, swipe to see more', 'Байрны зургууд, шудрж үзнэ үү', 'Фото апартаментов, листайте для просмотра');

  /* ----- Apartments ----- */
  add('Spacious & Cozy 1-bedroom apartment, Naadam Center', 'Өргөн тохилог 1 өрөө байр, Наадам Центр', 'Просторные и уютные апартаменты с 1 спальней, Наадам Центр');
  add('Cozy 1-bedroom apartment, Central Square', 'Тохилог 1 өрөө байр, Төв талбай', 'Уютные апартаменты с 1 спальней, Центральная площадь');
  add('Comfortable 1-bedroom apartment, Downtown', 'Тав тухтай 1 өрөө байр, хотын төв', 'Комфортные апартаменты с 1 спальней, центр города');
  add('Peaceful & Cozy 1-bed studio, State Department Store', 'Тайван тохилог студи, Улсын их дэлгүүр', 'Тихая уютная студия, Государственный универмаг');
  add('Cozy & Modern 1-bedroom apartment, Downtown', 'Тохилог, орчин үеийн 1 өрөө байр, хотын төв', 'Уютные современные апартаменты с 1 спальней, центр города');
  add('Bright & Spacious 1-bedroom apartment, Downtown', 'Гэрэлтэй өргөн 1 өрөө байр, хотын төв', 'Светлые просторные апартаменты с 1 спальней, центр города');
  add('Very clean and spacious, one bus ride from Central Square.', 'Маш цэвэр, өргөн. Төв талбайгаас нэг автобусаар хүрнэ.', 'Очень чистая и просторная, одна поездка на автобусе до Центральной площади.');
  add('Steps from Naadam Shopping Center, with a gym on site.', 'Наадам худалдааны төвөөс хэдхэн алхмын зайд, байранд фитнесс заал бий.', 'В нескольких шагах от торгового центра «Наадам», в здании есть спортзал.');
  add('Airy, with east and west windows, next to the Chinggis Khaan Museum.', 'Агаар сайтай, зүүн болон баруун цонхтой, Чингис хаан музейн хажууд.', 'Светлая, с окнами на восток и запад, рядом с музеем Чингисхана.');
  add('Bright and comfortable, close to cafés and shops.', 'Гэрэлтэй, тав тухтай, кафе, дэлгүүрүүдийн ойролцоо.', 'Светлые и комфортные, рядом кафе и магазины.');
  add('A quiet studio in the heart of the city, ideal for exploring on foot.', 'Хотын яг зүрхэнд байрлах нам гүм студи, явганаар хот тойрон үзэхэд тохиромжтой.', 'Тихая студия в самом центре города, идеально для прогулок пешком.');
  add('Modern and sunny, with a queen-size bed and full kitchen.', 'Орчин үеийн, нартай, том ортой, бүрэн тоноглогдсон гал тогоотой.', 'Современные и солнечные, с кроватью queen-size и полноценной кухней.');
  add('Skyline views on lively Seoul Street, great for longer stays.', 'Хөл хөдөлгөөн ихтэй Сөүл гудамжинд, хотын панорама харагдана. Урт хугацаагаар байхад тохиромжтой.', 'Панорамный вид на оживлённой улице Сеул, отлично для длительного проживания.');
  add('A very clean, spacious 2-room apartment for rent per night in KH Apartment, located one bus ride from the central square, near Naadam Center and Khan Tower. Everything you need for a comfortable stay.', 'KH Apartment дахь маш цэвэр, өргөн 2 өрөө байрыг шөнөөр түрээсэлнэ. Төв талбайгаас нэг автобусаар хүрэх зайд, Наадам Центр болон Хан Тауэрийн ойролцоо байрлана. Тав тухтай байхад хэрэгтэй бүх зүйл бэлэн.', 'Очень чистая просторная 2-комнатная квартира посуточно в KH Apartment — одна поездка на автобусе до центральной площади, рядом Наадам Центр и Хан Тауэр. Всё необходимое для комфортного проживания.');
  add('Spacious and cozy 1-bedroom apartment in KH Apartments. A few steps from Naadam Shopping Center, where you can dine, shop, and stroll around, and the stadium for the Naadam Festival. Modern, spacious gym in the center. Plenty of restaurants, bars and coffee shops nearby to suit your taste.', 'KH Apartments дахь өргөн тохилог 1 өрөө байр. Хоол идэж, дэлгүүр хэсэж, зугаалах боломжтой Наадам худалдааны төв болон Наадам наадмын цэнгэлдэх хүрээлэнгээс хэдхэн алхмын зайд. Төвд орчин үеийн өргөн фитнесс заал бий. Таны сонирхолд нийцсэн ресторан, баар, кофе шопууд ойрхон.', 'Просторные и уютные апартаменты с 1 спальней в KH Apartments. В нескольких шагах от торгового центра «Наадам», где можно поесть, сделать покупки и прогуляться, и от стадиона, где проходит фестиваль Наадам. В центре есть современный просторный спортзал. Рядом много ресторанов, баров и кофеен на любой вкус.');
  add('Spacious apartment with one bedroom, a few steps from Central Square and the Chinggis Khaan Museum, near the German Embassy. Windows face east and west, so ventilation is very good.', 'Нэг унтлагын өрөөтэй өргөн байр. Төв талбай болон Чингис хаан музейгээс хэдхэн алхмын зайд, Германы Элчин сайдын яамны ойролцоо. Цонх нь зүүн, баруун тийш харсан тул агааржилт маш сайн.', 'Просторные апартаменты с одной спальней в нескольких шагах от Центральной площади и музея Чингисхана, рядом с посольством Германии. Окна выходят на восток и на запад, поэтому проветривание очень хорошее.');
  add('Located near Seoul Street, one of Ulaanbaatar’s lively central areas with cafés, restaurants, convenience stores, and shopping nearby. This bright and comfortable space is perfect for couples, solo travelers, business guests, and long stays.', 'Улаанбаатарын төвийн хамгийн идэвхтэй газруудын нэг Сөүл гудамжны ойролцоо байрлана. Ойр хавьд кафе, ресторан, дэлгүүр, худалдааны төвүүд бий. Гэрэлтэй, тав тухтай энэ байр хосууд, ганцаараа аялагч, бизнесийн зочид болон урт хугацаагаар байхад төгс.', 'Расположены рядом с улицей Сеул — одним из самых оживлённых центральных районов Улан-Батора, где поблизости есть кафе, рестораны, магазины и торговые центры. Светлое и комфортное жильё идеально для пар, одиночных путешественников, деловых гостей и длительного проживания.');
  add('This 1-bed studio has one of the best locations in the city, near the State Department Store. Ideal for discovering the city on foot. This cozy studio offers a quiet, comfortable space that’s perfect for travelers looking to relax or explore. Enjoy walkable access to restaurants, shops, and local attractions.', 'Энэ студи нь Улсын их дэлгүүрийн ойролцоо, хотын хамгийн сайн байршлуудын нэгэд оршдог. Хотыг явганаар үзэхэд төгс. Тохилог студи нь амрах эсвэл хот үзэхийг хүссэн аялагчдад тохирсон нам гүм, тайван орчныг бүрдүүлнэ. Ресторан, дэлгүүр, үзвэрийн газруудад явганаар хүрч болно.', 'Эта студия расположена в одном из лучших мест города, рядом с Государственным универмагом. Идеально для знакомства с городом пешком. Уютная студия — тихое и комфортное место для путешественников, которые хотят отдохнуть или исследовать город. Рестораны, магазины и достопримечательности находятся в шаговой доступности.');
  add('Enjoy a comfortable stay in this bright and modern one-bedroom apartment in the heart of the city. It features a cozy living room with a smart TV, a fully equipped kitchen, a spacious bedroom with a comfortable queen-size bed, and plenty of natural light throughout. Perfect for couples, solo travelers, business guests, or small families looking for a clean, quiet, and convenient place to stay.', 'Хотын төвд байрлах гэрэлтэй, орчин үеийн энэ нэг өрөө байранд тав тухтай амраарай. Смарт телевизтэй тохилог зочны өрөө, бүрэн тоноглогдсон гал тогоо, тухтай том ортой өргөн унтлагын өрөө бий бөгөөд байр даяар байгалийн гэрэл сайтай. Цэвэрхэн, нам гүм, тохиромжтой байр хайж буй хосууд, ганцаараа аялагч, бизнесийн зочид болон жижиг гэр бүлд төгс.', 'Комфортно отдохните в этих светлых современных апартаментах с одной спальней в самом сердце города. Здесь уютная гостиная со smart-TV, полностью оборудованная кухня, просторная спальня с удобной кроватью queen-size и много естественного света. Отлично подходит для пар, одиночных путешественников, деловых гостей и небольших семей, которым нужно чистое, тихое и удобное жильё.');
  add('Welcome to our spacious and comfortable apartment in the heart of Ulaanbaatar on Seoul Street. A perfect combination of comfort, convenience, and beautiful skyline views, ideal for families, couples, business travelers, and long stays. Seoul Street is one of the city’s most convenient, central, and energetic neighborhoods, perfect for exploring Ulaanbaatar on foot.', 'Улаанбаатарын төв, Сөүл гудамжинд байрлах манай өргөн, тав тухтай байранд тавтай морил. Тав тух, ая тухтай байдал, хотын гоё панорама харагдах байдал нэгдсэн энэ байр гэр бүл, хосууд, бизнесийн аялагчид болон урт хугацаагаар байхад тохиромжтой. Сөүл гудамж бол хотын хамгийн тохиромжтой, төвд ойр, эрч хүчтэй хороолол бөгөөд Улаанбаатарыг явганаар үзэхэд төгс.', 'Добро пожаловать в наши просторные и удобные апартаменты в самом сердце Улан-Батора, на улице Сеул. Сочетание комфорта, удобства и красивого панорамного вида идеально для семей, пар, деловых путешественников и длительного проживания. Улица Сеул — один из самых удобных, центральных и энергичных районов города, отлично подходит для прогулок по Улан-Батору пешком.');

  /* ----- Booking box ----- */
  add('Full name', 'Бүтэн нэр', 'Полное имя');
  add('Phone', 'Утас', 'Телефон');
  add('Email (optional)', 'И-мэйл (заавал биш)', 'Эл. почта (необязательно)');
  add('Request booking', 'Захиалга илгээх', 'Отправить заявку');
  add('Select date', 'Огноо сонгох', 'Выберите дату');
  add('Pay by bank transfer', 'Банкны шилжүүлгээр төлөх', 'Оплата банковским переводом');
  add('Bank', 'Банк', 'Банк');
  add('Account holder', 'Данс эзэмшигч', 'Владелец счёта');
  add('Account number', 'Дансны дугаар', 'Номер счёта');
  add('Copy', 'Хуулах', 'Копировать');
  add('Copied', 'Хуулсан', 'Скопировано');
  add('Select it', 'Сонгоно уу', 'Выделите');
  add('Not configured', 'Тохируулаагүй', 'Не настроено');
  add('Bank transfer details are not configured yet. Do not transfer money until the host provides verified details.', 'Банкны шилжүүлгийн мэдээлэл тохируулагдаагүй байна. Эзэн баталгаатай мэдээлэл өгөх хүртэл мөнгө шилжүүлж болохгүй.', 'Банковские реквизиты ещё не настроены. Не переводите деньги, пока хозяин не предоставит проверенные реквизиты.');
  add('Booking reference', 'Захиалгын код', 'Код бронирования');
  add('Shown after booking, e.g. A3F9C-21B7E', 'Захиалгын дараа харагдана, жнь A3F9C-21B7E', 'Появится после заявки, напр. A3F9C-21B7E');
  add('Transaction number', 'Гүйлгээний дугаар', 'Номер транзакции');
  add('From your bank receipt', 'Банкны баримтаас', 'Из банковской квитанции');
  add('Type the transaction number again', 'Гүйлгээний дугаарыг дахин оруулна уу', 'Введите номер транзакции ещё раз');
  add('Same number, to avoid typos', 'Алдаанаас сэргийлж ижил дугаар', 'Тот же номер, чтобы избежать опечаток');
  add('Send transaction number', 'Гүйлгээний дугаар илгээх', 'Отправить номер транзакции');
  add('Check my booking status', 'Захиалгын төлөв шалгах', 'Проверить статус брони');
  add('Transfer the total and write the booking reference in the transfer note. Sending the number does not confirm your stay: we check the transfer first. If you typed it wrong, just send the correct one again.', 'Нийт дүнг шилжүүлж, гүйлгээний утга дээр захиалгын кодоо бичнэ үү. Дугаар илгээх нь захиалгыг баталгаажуулахгүй: бид эхлээд шилжүүлгийг шалгана. Буруу оруулсан бол зөв дугаараа дахин илгээнэ үү.', 'Переведите полную сумму и укажите код бронирования в комментарии к переводу. Отправка номера не подтверждает бронь: сначала мы проверяем перевод. Если ошиблись, просто отправьте правильный номер ещё раз.');

  /* ----- Messages ----- */
  add('Online booking is not switched on yet.', 'Онлайн захиалга одоогоор идэвхжээгүй байна.', 'Онлайн-бронирование пока не включено.');
  add('Sending…', 'Илгээж байна…', 'Отправка…');
  add('Checking…', 'Шалгаж байна…', 'Проверка…');
  add('Check-out must be after check-in.', 'Явах өдөр ирэх өдрөөс хойш байх ёстой.', 'Дата выезда должна быть позже даты заезда.');
  add('Those dates are already booked.', 'Эдгээр өдрүүд аль хэдийн захиалагдсан байна.', 'Эти даты уже забронированы.');
  add('Enter your 10-character booking reference.', 'Захиалгын 10 тэмдэгтийн кодоо оруулна уу.', 'Введите код бронирования из 10 символов.');
  add('Enter the transaction number from your bank receipt.', 'Банкны баримт дээрх гүйлгээний дугаарыг оруулна уу.', 'Введите номер транзакции из банковской квитанции.');
  add('The two transaction numbers do not match. Check them against your receipt.', 'Хоёр гүйлгээний дугаар таарахгүй байна. Баримттайгаа тулгаж үзнэ үү.', 'Номера транзакций не совпадают. Сверьте их с квитанцией.');
  add('Online payment reporting or bank details are not configured. Contact the host.', 'Онлайн төлбөрийн мэдээлэл эсвэл банкны мэдээлэл тохируулагдаагүй байна. Эзэнтэй холбогдоно уу.', 'Онлайн-отправка платежа или банковские реквизиты не настроены. Свяжитесь с хозяином.');
  add('Waiting for your payment. After you transfer, send the transaction number above.', 'Таны төлбөрийг хүлээж байна. Шилжүүлсний дараа дээрх хэсэгт гүйлгээний дугаараа илгээнэ үү.', 'Ожидаем вашу оплату. После перевода отправьте номер транзакции выше.');
  add('This request was cancelled or expired. Please contact us.', 'Энэ хүсэлт цуцлагдсан эсвэл хугацаа нь дууссан. Бидэнтэй холбогдоно уу.', 'Эта заявка отменена или истёк срок. Свяжитесь с нами.');
  add('Sorry, those dates are already booked', 'Уучлаарай, эдгээр өдрүүд аль хэдийн захиалагдсан байна', 'К сожалению, эти даты уже забронированы');
  add('Please enter your name and phone number', 'Нэр, утасны дугаараа оруулна уу', 'Введите имя и номер телефона');
  add('Choose valid future dates', 'Хүчинтэй, ирээдүйн огноо сонгоно уу', 'Выберите корректные будущие даты');
  add('Stays must be 1 to 60 nights', 'Байх хугацаа 1-ээс 60 шөнө байх ёстой', 'Срок проживания — от 1 до 60 ночей');
  add('Too many pending requests for this phone number', 'Энэ утасны дугаараас хэт олон хүлээгдэж буй хүсэлт байна', 'Слишком много ожидающих заявок с этого номера');
  add('Please enter a valid email or leave it empty', 'Зөв и-мэйл оруулна уу эсвэл хоосон орхино уу', 'Введите корректный email или оставьте поле пустым');
  add('Booking reference not found', 'Захиалгын код олдсонгүй', 'Код бронирования не найден');
  add('This booking is already confirmed', 'Энэ захиалга аль хэдийн баталгаажсан', 'Эта бронь уже подтверждена');
  add('This request expired or was cancelled. Please contact us.', 'Энэ хүсэлтийн хугацаа дууссан эсвэл цуцлагдсан. Бидэнтэй холбогдоно уу.', 'Срок заявки истёк или она отменена. Свяжитесь с нами.');
  add('Enter the transaction number exactly as shown on your bank receipt', 'Банкны баримт дээрх гүйлгээний дугаарыг яг адилхан оруулна уу', 'Введите номер транзакции точно так, как в квитанции');
  add('That transaction number is already used on another booking. Please check it.', 'Энэ гүйлгээний дугаар өөр захиалгад ашиглагдсан байна. Шалгана уу.', 'Этот номер транзакции уже использован в другой брони. Проверьте его.');
  add('Enter the full 10-character booking reference', 'Захиалгын 10 тэмдэгтийн кодыг бүтнээр нь оруулна уу', 'Введите полный код бронирования из 10 символов');
  add('Unknown apartment', 'Мэдэгдэхгүй байр', 'Неизвестные апартаменты');

  /* ----- Messages with numbers or names in them ----- */
  const PLACES = {
    'Khan-Uul': ['Хан-Уул', 'Хан-Уул'], 'Khan Uul district': ['Хан-Уул дүүрэг', 'район Хан-Уул'],
    'Sukhbaatar': ['Сүхбаатар', 'Сухэ-Батор'], 'Sukhbaatar district': ['Сүхбаатар дүүрэг', 'район Сухэ-Батор'],
    'Seoul Street': ['Сөүл гудамж', 'улица Сеул'], 'Peace Avenue': ['Энхтайваны өргөн чөлөө', 'проспект Мира'],
    'Ulaanbaatar': ['Улаанбаатар', 'Улан-Батор']
  };
  const place = (p, l) => PLACES[p] ? PLACES[p][l === 'mn' ? 0 : 1] : p;
  const P = [
    [/^(\d+) beds · (\d+) guests · (.+)$/, (l, m) => {
      const b = +m[1], g = +m[2], pl = m[3].split(', ').map(x => place(x, l)).join(', ');
      return l === 'mn' ? `${b} ор · ${g} зочин · ${pl}`
        : `${b} ${ruPlural(b, 'кровать', 'кровати', 'кроватей')} · ${g} ${ruPlural(g, 'гость', 'гостя', 'гостей')} · ${pl}`;
    }],
    [/^(\d+) photos · swipe or scroll sideways$/, (l, m) => l === 'mn' ? `${m[1]} зураг · хажуу тийш шудрана уу` : `${m[1]} фото · листайте вбок`],
    [/^(\d+) apartments?$/, (l, m) => l === 'mn' ? `${m[1]} байр` : `${m[1]} ${ruPlural(+m[1], 'апартамент', 'апартамента', 'апартаментов')}`],
    [/^(\d+)(\+?) guests?$/, (l, m) => l === 'mn' ? `${m[1]}${m[2]} зочин` : (m[2] ? `${m[1]}+ гостей` : `${m[1]} ${ruPlural(+m[1], 'гость', 'гостя', 'гостей')}`)],
    [/^(\d+) nights? · Total (.+)$/, (l, m) => l === 'mn' ? `${m[1]} шөнө · Нийт ${m[2]}` : `${m[1]} ${ruPlural(+m[1], 'ночь', 'ночи', 'ночей')} · Итого ${m[2]}`],
    [/^Already booked: (.+)$/, (l, m) => (l === 'mn' ? 'Захиалагдсан: ' : 'Уже забронировано: ') + m[1]],
    [/^This apartment sleeps up to (\d+) guests$/, (l, m) => l === 'mn' ? `Энэ байранд хамгийн ихдээ ${m[1]} зочин байрлана` : `Здесь могут разместиться максимум ${m[1]} ${ruPlural(+m[1], 'гость', 'гостя', 'гостей')}`],
    [/^Request sent! Your reference: (.+) · Total (.+)\. Your dates are held for 24 hours\. Write the reference in your bank transfer note, then send the transaction number below\.$/, (l, m) => l === 'mn'
      ? `Хүсэлт илгээгдлээ! Таны захиалгын код: ${m[1]} · Нийт ${m[2]}. Таны өдрүүдийг 24 цагийн турш хадгална. Банкны шилжүүлгийн утга дээр кодоо бичээд, доор гүйлгээний дугаараа илгээнэ үү.`
      : `Заявка отправлена! Ваш код бронирования: ${m[1]} · Итого ${m[2]}. Даты удерживаются 24 часа. Укажите код в комментарии к банковскому переводу, затем отправьте номер транзакции ниже.`],
    [/^We could not save it online\. Please send the number to us on WhatsApp or Viber with your reference (.+)\.$/, (l, m) => l === 'mn'
      ? `Онлайнаар хадгалж чадсангүй. Дугаараа ${m[1]} кодын хамт WhatsApp эсвэл Viber-ээр бидэнд илгээнэ үү.`
      : `Не удалось сохранить онлайн. Отправьте номер нам в WhatsApp или Viber вместе с кодом ${m[1]}.`],
    [/^Received: (.+)\. Your booking is NOT confirmed yet\. We will check the transfer and confirm\. If you typed the number wrong, enter the correct one and send again\.$/, (l, m) => l === 'mn'
      ? `Хүлээн авлаа: ${m[1]}. Таны захиалга ОДООГООР БАТАЛГААЖААГҮЙ байна. Бид шилжүүлгийг шалгаад баталгаажуулна. Дугаарыг буруу бичсэн бол зөвийг нь оруулаад дахин илгээнэ үү.`
      : `Получено: ${m[1]}. Бронь ЕЩЁ НЕ ПОДТВЕРЖДЕНА. Мы проверим перевод и подтвердим. Если вы ошиблись в номере, введите правильный и отправьте снова.`],
    [/^Payment received and waiting for our check\. NOT confirmed yet\.(?: Transaction number we have: (.+)\.)? Wrong number\? Send the correct one above\.$/, (l, m) => l === 'mn'
      ? `Төлбөр хүлээн авагдаж, шалгагдахыг хүлээж байна. Одоогоор БАТАЛГААЖААГҮЙ.${m[1] ? ` Бидэнд байгаа гүйлгээний дугаар: ${m[1]}.` : ''} Дугаар буруу юу? Зөвийг нь дээр илгээнэ үү.`
      : `Платёж получен и ожидает проверки. ЕЩЁ НЕ ПОДТВЕРЖДЕНО.${m[1] ? ` Номер транзакции у нас: ${m[1]}.` : ''} Ошиблись в номере? Отправьте правильный выше.`],
    [/^Confirmed! Your stay (.+) to (.+) is booked\.$/, (l, m) => l === 'mn'
      ? `Баталгаажлаа! ${m[1]} – ${m[2]} хугацааны таны захиалга баталгаажсан.`
      : `Подтверждено! Ваше проживание с ${m[1]} по ${m[2]} забронировано.`]
  ];

  function tr(core, l) {
    if (l === 'en') return core;
    const k = norm(core), d = D[k];
    if (d && d[l]) return d[l];
    for (const [re, fn] of P) { const m = k.match(re); if (m) return fn(l, m); }
    return core;
  }

  /* ----- Engine ----- */
  let lang = 'en';
  const cbs = [];
  const origText = new WeakMap();
  const ATTRS = ['placeholder', 'aria-label'];
  const ORIG_TITLE = document.title;

  function doText(n) {
    const p = n.parentNode;
    if (!p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(p.nodeName) || !n.nodeValue.trim()) return;
    if (!origText.has(n)) origText.set(n, n.nodeValue);
    const src = origText.get(n), core = src.trim(), out = tr(core, lang);
    const next = src.replace(core, () => out);
    if (n.nodeValue !== next) n.nodeValue = next;
  }
  function doAttrs(el) {
    ATTRS.forEach(a => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      el.__i18n = el.__i18n || {};
      if (!(a in el.__i18n)) el.__i18n[a] = el.getAttribute(a);
      const v = tr(el.__i18n[a], lang);
      if (el.getAttribute(a) !== v) el.setAttribute(a, v);
    });
  }
  function apply(root) {
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1 || (root.closest && root.closest('.flatpickr-calendar'))) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(doText);
    doAttrs(root);
    root.querySelectorAll('[placeholder],[aria-label]').forEach(doAttrs);
  }

  function set(l) {
    if (LANGS.indexOf(l) < 0) l = 'en';
    lang = l;
    try { localStorage.setItem('UBStay-lang', l); } catch (e) {}
    document.documentElement.lang = l;
    document.title = l === 'en' ? ORIG_TITLE : tr(ORIG_TITLE, l);
    document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    apply(document.body);
    cbs.forEach(f => f(l));
  }
  function pick() {
    try { const s = localStorage.getItem('UBStay-lang'); if (LANGS.indexOf(s) > -1) return s; } catch (e) {}
    const n = (navigator.language || '').slice(0, 2).toLowerCase();
    return n === 'mn' ? 'mn' : n === 'ru' ? 'ru' : 'en';
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => set(b.dataset.lang)));
    new MutationObserver(ms => {
      if (lang === 'en') return;
      ms.forEach(m => m.addedNodes.forEach(apply));
    }).observe(document.body, { childList: true, subtree: true });
    set(pick());
  });

  window.I18N = { set, tr: s => tr(s, lang), onChange: f => cbs.push(f), _tr: tr, _D: D };
})();