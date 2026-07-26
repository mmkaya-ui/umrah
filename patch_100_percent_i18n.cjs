const fs = require('fs');
const path = require('path');

const projectRoot = 'd:/antigravity/umrah';

const extraKeys = {
  tr: {
    preparation: {
      izar_caption: "1. Alt Parça (İzar) Bağlanışı (Büyütmek için tıkla)",
      rida_caption: "2. Üst Parça (Rida) Omuzlara Alınışı (Büyütmek için tıkla)",
      listen_talbiyah: "🔊 Telbiye Duasını Sesli Dinle",
      packing_subtitle: "Kutsal beldelere yola çıkmadan önce yanınıza almanız gereken kritik eşyaları kontrol ediniz:",
      pack_item_1: "⚪ 2 Parça İhram Havlusu (Erkekler için) & Dikişsiz Sandalet",
      pack_item_2: "⚪ İhram Kemeri (Cepli/Cırt cırtlı) & Bel Çantası",
      pack_item_3: "⚪ Kokusuz Sabun & Şampuan & Pişik Kremi/Pudra",
      pack_item_4: "⚪ Cep Kur'an-ı Kerim, Cevşen / Zikirmatik",
      pack_item_5: "⚪ Düzenli İlaçlar, Boğaz Pastili, Kas Gevşetici",
      pack_item_6: "⚪ Pasaport, Vize Çıktısı, Telefon & Powerbank"
    },
    dhikr: {
      select_label: "Zikir Seçimi:",
      subhanallah_name: "Sübhânallah (33)",
      alhamdulillah_name: "Elhamdülillâh (33)",
      allahuakbar_name: "Allâhuekber (33)",
      lailahaillallah_name: "Lâ ilâhe illallâh",
      salavat_name: "Salavat-ı Şerife",
      custom_name: "Özel Zikir",
      subhanallah_meaning: "\"Allah noksan sıfatlardan münezzehtir.\"",
      target_prefix: "Hedef: ",
      tap_button: "ZİKİR ÇEK (DOKUN)",
      reset_button: "Sıfırla",
      complete_msg: "🎉 Elhamdülillah! Zikir Tamamlandı."
    },
    practical: {
      ziyarat_card_desc: "Mekke-i Mükerreme ve Medine-i Münevvere'deki kutsal ziyaret yerlerini, tarihi ve ruhani önemleriyle keşfedin."
    },
    ziyarat: {
      rawdah_title: "Ravza-i Mutahhara Ziyareti ve Nusuk Randevusu",
      rawdah_desc: "Peygamber Efendimizin (s.a.v.) kabri ile minberi arasındaki bölge \"Cennet Bahçelerinden bir bahçedir\". Burayı ziyaret edebilmek için Suudi Arabistan'ın resmi Nusuk (Eatmarna) uygulamasından önceden randevu almanız gerekmektedir.",
      rawdah_b1: "📌 Nusuk uygulamasını indirip pasaport ve vize numaranızla giriş yapın.",
      rawdah_b2: "📌 \"Pray in Rawdah\" (Ravza'da Namaz) menüsünden uygun gün ve saat dilimini seçin.",
      rawdah_b3: "📌 Randevu saatinizden 30 dakika önce Mescid-i Nebevi avlusundaki belirtilen kapıda hazır bulunun.",
      rawdah_b4: "📌 Hücre-i Saadet önünden geçerken: \"Esselâmü aleyke yâ Resûlallâh\" diyerek edeple selam veriniz."
    }
  },
  en: {
    preparation: {
      izar_caption: "1. Lower Garment (Izar) Wrapping (Click to enlarge)",
      rida_caption: "2. Upper Garment (Rida) Drape (Click to enlarge)",
      listen_talbiyah: "🔊 Listen to Talbiyah Recitation",
      packing_subtitle: "Check the essential items to pack before departing for the Holy Lands:",
      pack_item_1: "⚪ 2-Piece Ihram Towel (For Men) & Unstitched Sandals",
      pack_item_2: "⚪ Ihram Belt (Pockets/Velcro) & Waist Bag",
      pack_item_3: "⚪ Unscented Soap & Shampoo & Anti-chafing Cream",
      pack_item_4: "⚪ Pocket Quran, Supplication Book / Dhikr Counter",
      pack_item_5: "⚪ Regular Medications, Throat Lozenges, Muscle Ointment",
      pack_item_6: "⚪ Passport, Visa Copy, Phone & Powerbank"
    },
    dhikr: {
      select_label: "Select Dhikr:",
      subhanallah_name: "Subhanallah (33)",
      alhamdulillah_name: "Alhamdulillah (33)",
      allahuakbar_name: "Allahu Akbar (33)",
      lailahaillallah_name: "La ilaha illallah",
      salavat_name: "Salawat Sharif",
      custom_name: "Custom Dhikr",
      subhanallah_meaning: "\"Glory be to Allah, far removed from all imperfections.\"",
      target_prefix: "Target: ",
      tap_button: "TAP TO RECITATE",
      reset_button: "Reset Counter",
      complete_msg: "🎉 Alhamdulillah! Dhikr Completed."
    },
    practical: {
      ziyarat_card_desc: "Explore holy visitation sites in Makkah al-Mukarramah and Madinah al-Munawwarah with historical context."
    },
    ziyarat: {
      rawdah_title: "Rawdah Al-Rasool Visit & Nusuk Appointment",
      rawdah_desc: "The area between the tomb of the Prophet (pbuh) and his pulpit is 'one of the Gardens of Paradise'. To visit this holy site, a prior appointment must be booked via Saudi Arabia's official Nusuk App.",
      rawdah_b1: "📌 Download the Nusuk app and log in with your passport and visa details.",
      rawdah_b2: "📌 Select 'Pray in Rawdah' and choose an available time slot.",
      rawdah_b3: "📌 Arrive at the assigned courtyard gate 30 minutes before your appointment.",
      rawdah_b4: "📌 As you pass the Sacred Chamber, send greetings reverently: 'As-salamu 'alayka ya Rasool Allah'."
    }
  },
  ar: {
    preparation: {
      izar_caption: "1. طريقة إزار الإحرام (انقر للتكبير)",
      rida_caption: "2. طريقة رداء الإحرام (انقر للتكبير)",
      listen_talbiyah: "🔊 الاستماع إلى التلبية",
      packing_subtitle: "تأكد من تجهيز المستلزمات الضرورية قبل السفر إلى البقاع المقدسة:",
      pack_item_1: "⚪ ثوبا الإحرام (للرجال) وصندل غير مخيط",
      pack_item_2: "⚪ حزام الإحرام وحقيبة الخصر",
      pack_item_3: "⚪ صابون وشامبو بدون رائحة وكريم مرطب",
      pack_item_4: "⚪ مصحف جيب وكتاب أدعية ومسبحة",
      pack_item_5: "⚪ الأدوية الخاصة ومسكنات وخافض حرارة",
      pack_item_6: "⚪ جواز السفر وتأشيرة الدخول وهاتف وبنك طاقة"
    },
    dhikr: {
      select_label: "اختر الذكر:",
      subhanallah_name: "سبحان الله (33)",
      alhamdulillah_name: "الحمد لله (33)",
      allahuakbar_name: "الله أكبر (33)",
      lailahaillallah_name: "لا إله إلا الله",
      salavat_name: "الصلاة على النبي",
      custom_name: "ذكر مخصص",
      subhanallah_meaning: "\"سبحان الله وبحمده سبحان الله العظيم.\"",
      target_prefix: "الهدف: ",
      tap_button: "اضغط للتسبيح",
      reset_button: "إعادة ضبط",
      complete_msg: "🎉 الحمد لله! اكتمل التسبيح."
    },
    practical: {
      ziyarat_card_desc: "اكتشف الأماكن المقدسة والمزارات التاريخية في مكة المكرمة والمدينة المنورة."
    },
    ziyarat: {
      rawdah_title: "زيارة الروضة الشريفة وحجز تطبيق نسك",
      rawdah_desc: "ما بين بيتي ومطبَري روضة من رياض الجنة. لزيارة الصحن الشريف يجب الحجز المسبق عبر تطبيق نسك الرسمي.",
      rawdah_b1: "📌 قم بتنزيل تطبيق نسك وسجل برقم الجواز والتأشيرة.",
      rawdah_b2: "📌 اختر 'الصلاة في الروضة الشريفة' وحدد الموعد المناسب.",
      rawdah_b3: "📌 الحضور عند البوابة المحددة قبل الموعد بـ 30 دقيقة.",
      rawdah_b4: "📌 السلام على النبي ﷺ وأبي بكر وعمر رضي الله عنهما بأدب وسكينة."
    }
  },
  de: {
    preparation: {
      izar_caption: "1. Anlegen des Untertuchs (Izar) (Zum Vergrößern klicken)",
      rida_caption: "2. Umlegen des Obertuchs (Rida) (Zum Vergrößern klicken)",
      listen_talbiyah: "🔊 Talbiyah anhören",
      packing_subtitle: "Prüfen Sie Ihre Packliste vor der Abreise in die Heiligen Stätten:",
      pack_item_1: "⚪ 2-teiliges Ihram-Tuch (für Männer) & ungenähte Sandalen",
      pack_item_2: "⚪ Ihram-Gürtel mit Taschen & Gürteltasche",
      pack_item_3: "⚪ Duftfreie Seife & Shampoo & Creme",
      pack_item_4: "⚪ Taschen-Koran, Bittgebete-Buch / Zähler",
      pack_item_5: "⚪ Regelmäßige Medikamente & Schmerzmittel",
      pack_item_6: "⚪ Reisepass, Visum, Telefon & Powerbank"
    },
    dhikr: {
      select_label: "Dhikr auswählen:",
      subhanallah_name: "Subhanallah (33)",
      alhamdulillah_name: "Alhamdulillah (33)",
      allahuakbar_name: "Allahu Akbar (33)",
      lailahaillallah_name: "La ilaha illallah",
      salavat_name: "Salawat",
      custom_name: "Eigener Dhikr",
      subhanallah_meaning: "\"Ehre sei Allah, Er ist frei von jedem Makel.\"",
      target_prefix: "Ziel: ",
      tap_button: "ZÄHLEN (TIPPEN)",
      reset_button: "Zurücksetzen",
      complete_msg: "🎉 Alhamdulillah! Dhikr abgeschlossen."
    },
    practical: {
      ziyarat_card_desc: "Entdecken Sie heilige Stätten in Mekka und Medina mit historischem Hintergrund."
    },
    ziyarat: {
      rawdah_title: "Besuch der Rawdah & Nusuk-Termin",
      rawdah_desc: "Der Bereich zwischen dem Grab des Propheten (s.a.w.) und seiner Kanzel ist ein Garten des Paradieses. Für den Besuch ist eine Terminbuchung über die Nusuk-App erforderlich.",
      rawdah_b1: "📌 Nusuk-App herunterladen und mit Pass- und Visanummer anmelden.",
      rawdah_b2: "📌 'Gebet in der Rawdah' auswählen und Termin buchen.",
      rawdah_b3: "📌 30 Minuten vor dem Termin am zugewiesenen Tor erscheinen.",
      rawdah_b4: "📌 Ehrerbietig Grüßen: 'As-salamu 'alayka ya Rasool Allah'."
    }
  },
  ru: {
    preparation: {
      izar_caption: "1. Одевание Изара (Нажмите для увеличения)",
      rida_caption: "2. Одевание Рида (Нажмите для увеличения)",
      listen_talbiyah: "🔊 Слушать чтение Тальбии",
      packing_subtitle: "Проверьте список вещей перед отправлением в Священные земли:",
      pack_item_1: "⚪ 2-частное полотно Ихрама (для мужчин) и сандалии",
      pack_item_2: "⚪ Пояс Ихрама с карманами и поясная сумка",
      pack_item_3: "⚪ Мыло и шампунь без запаха, крем",
      pack_item_4: "⚪ Карманный Коран, книга дуа / тасбих",
      pack_item_5: "⚪ Регулярные лекарства, пастилки от горла",
      pack_item_6: "⚪ Паспорт, виза, телефон и пауэрбанк"
    },
    dhikr: {
      select_label: "Выберите зихр:",
      subhanallah_name: "Субханаллах (33)",
      alhamdulillah_name: "Альхамдулиллах (33)",
      allahuakbar_name: "Аллаху Акбар (33)",
      lailahaillallah_name: "Ля иляха илляллах",
      salavat_name: "Салават",
      custom_name: "Свой зихр",
      subhanallah_meaning: "\"Пречист Аллах от всех недостатков.\"",
      target_prefix: "Цель: ",
      tap_button: "НАЖМИТЕ ДЛЯ СЧЕТА",
      reset_button: "Сбросить",
      complete_msg: "🎉 Альхамдулиллах! Тасбих завершен."
    },
    practical: {
      ziyarat_card_desc: "Исследуйте святые места Мекки и Медины с историческим описанием."
    },
    ziyarat: {
      rawdah_title: "Посещение Равзы и запись в Nusuk",
      rawdah_desc: "Участок между домом Пророка ﷺ и его минбаром — один из садов Рая. Для визита требуется предварительная запись через приложение Nusuk.",
      rawdah_b1: "📌 Скачайте приложение Nusuk и войдите с данными паспорта и визы.",
      rawdah_b2: "📌 Выберите 'Намаз в Равзе' и доступный интервал времени.",
      rawdah_b3: "📌 Прибудьте к указанным воротам за 30 минут до сеанса.",
      rawdah_b4: "📌 Проходя мимо Равзы, поприветствуйте: 'Ас-саляму алейка я Расулаллах'."
    }
  },
  es: {
    preparation: {
      izar_caption: "1. Colocación de la prenda inferior (Izar) (Clic para agrandar)",
      rida_caption: "2. Colocación de la prenda superior (Rida) (Clic para agrandar)",
      listen_talbiyah: "🔊 Escuchar recitación de la Talbiyah",
      packing_subtitle: "Verifique los artículos esenciales antes de viajar a las Tierras Santas:",
      pack_item_1: "⚪ Toalla de Ihram de 2 piezas (Hombres) y sandalias sin costura",
      pack_item_2: "⚪ Cinturón de Ihram con bolsillos y riñonera",
      pack_item_3: "⚪ Jabón y champú sin perfume y crema rozaduras",
      pack_item_4: "⚪ Corán de bolsillo, libro de súplicas y contador",
      pack_item_5: "⚪ Medicamentos habituales, pastillas para la garganta",
      pack_item_6: "⚪ Pasaporte, copia de visado, teléfono y batería externa"
    },
    dhikr: {
      select_label: "Seleccionar Dhikr:",
      subhanallah_name: "Subhanallah (33)",
      alhamdulillah_name: "Alhamdulillah (33)",
      allahuakbar_name: "Allahu Akbar (33)",
      lailahaillallah_name: "La ilaha illallah",
      salavat_name: "Salawat",
      custom_name: "Dhikr Personalizado",
      subhanallah_meaning: "\"Glorificado sea Allah, libre de toda imperfección.\"",
      target_prefix: "Objetivo: ",
      tap_button: "TOCAR PARA CONTAR",
      reset_button: "Reiniciar",
      complete_msg: "🎉 ¡Alhamdulillah! Dhikr completado."
    },
    practical: {
      ziyarat_card_desc: "Explore los lugares sagrados de La Meca y Medina con contexto histórico."
    },
    ziyarat: {
      rawdah_title: "Visita a la Rawdah y Cita en Nusuk",
      rawdah_desc: "El área entre la tumba del Profeta (pyb) y su púlpito es 'uno de los Jardines del Paraíso'. Para visitarlo se requiere cita previa mediante la aplicación Nusuk.",
      rawdah_b1: "📌 Descargue la app Nusuk e inicie sesión con su pasaporte y visado.",
      rawdah_b2: "📌 Seleccione 'Orar en la Rawdah' y elija un horario disponible.",
      rawdah_b3: "📌 Llegue a la puerta del patio asignada 30 minutos antes.",
      rawdah_b4: "📌 Al pasar, salude con respeto: 'As-salamu 'alayka ya Rasool Allah'."
    }
  },
  ko: {
    preparation: {
      izar_caption: "1. 하의(이زار) 착용 방법 (클릭하여 확대)",
      rida_caption: "2. 상의(리다) 착용 방법 (클릭하여 확대)",
      listen_talbiyah: "🔊 탈비야 음성 듣기",
      packing_subtitle: "성지로 출발하기 전 준비물을 확인하세요:",
      pack_item_1: "⚪ 이흐람 수건 2장 (남성용) 및 바느질 없는 샌들",
      pack_item_2: "⚪ 이흐람 벨트 (주머니/찍찍이) 및 힙색",
      pack_item_3: "⚪ 무향 비누 & 샴푸 & 림밤",
      pack_item_4: "⚪ 소형 쿠란책, 기도서 및 디지털 디크르 카운터",
      pack_item_5: "⚪ 상복 약품, 목캔디, 근육통 연고",
      pack_item_6: "⚪ 여권, 비자 사본, 스마트폰 및 보조배터리"
    },
    dhikr: {
      select_label: "디크르 선택:",
      subhanallah_name: "수브하날라 (33)",
      alhamdulillah_name: "알함둘릴라 (33)",
      allahuakbar_name: "알라후 아크바르 (33)",
      lailahaillallah_name: "라 일라하 일랄라",
      salavat_name: "살라와트",
      custom_name: "사용자 지정 디크르",
      subhanallah_meaning: "\"모든 결점이 없으신 알라께 찬미를 올립니다.\"",
      target_prefix: "목표: ",
      tap_button: "터치하여 횟수 세기",
      reset_button: "초기화",
      complete_msg: "🎉 알함둘릴라! 디크르가 완료되었습니다."
    },
    practical: {
      ziyarat_card_desc: "메카와 메디나의 성지 및 역사적 장소들을 탐방하세요."
    },
    ziyarat: {
      rawdah_title: "라우다 방문 및 Nusuk 앱 예약 안내",
      rawdah_desc: "예언자(평화가 그에게 있기를)의 묘소와 설교대 사이는 '천국의 정원 중 하나'입니다. 방문을 위해서는 Nusuk 앱 예약이 필수입니다.",
      rawdah_b1: "📌 Nusuk 앱을 다운로드하고 여권 및 비자 번호로 로그인합니다.",
      rawdah_b2: "📌 'Pray in Rawdah' 메뉴에서 원하는 날짜와 시간을 선택합니다.",
      rawdah_b3: "📌 예약 시간 30분 전까지 지정된 게이트에 도착합니다.",
      rawdah_b4: "📌 지나갈 때 정중히 경의를 표합니다: '아스-살라무 알라이카 야 라술둘라'."
    }
  }
};

const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];

for (const lang of langs) {
  const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    function deepMerge(target, source) {
      for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
          if (!target[key]) target[key] = {};
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    
    deepMerge(content, extraKeys[lang]);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Merged 100% i18n keys into ${lang}.json`);
  }
}
