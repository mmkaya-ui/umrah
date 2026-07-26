const fs = require('fs');
const path = require('path');

const projectRoot = 'd:\\antigravity\\umrah';

const data = {
  tr: {
    tawaf: {
      complete_title: "Elhamdülillah, Tavafınız Tamamlandı!",
      complete_subtitle: "Tavafınız bittiğinde sırasıyla şu adımları takip ediniz:",
      post_step_1: "1. Sağ Omzunuzu Kapatın: Tavafta açılan sağ omzu (Iztıba) tekrar ihram bezinizle örtün.",
      post_step_2: "2. 2 Rekat Tavaf Namazı Kılın: Makam-ı İbrahim arkasında veya Harem'in uygun bir yerinde 2 rekat namaz kılın (1. rekat Kafirun, 2. rekat İhlas).",
      post_step_3: "3. Doyasıya Zemzem İçin: İçme alanında kıbleye dönüp ayakta Zemzem içiniz, başınıza sürünüz ve dua ediniz.",
      post_step_4: "4. Sa'y İbadetine Geçin: Safa tepesine doğru yönelerek Sa'y alanına ilerleyin.",
      btn_start_sai: "Sa'y İbadetine Başla ➔"
    },
    sai: {
      complete_title: "Elhamdülillah, Sa'y ve Umreniz Tamamlandı!",
      complete_subtitle: "7. şavt Merve tepesinde biter. İhramdan çıkmak için sırasıyla şu adımları takip ediniz:",
      post_step_1: "1. Merve Tepesinde Dua Edin: Merve tepesinde kıbleye dönüp hamd edin ve gönlünüzden geçen duaları yapın.",
      post_step_2: "2. Tıraş Olun (Saç Kesimi): Erkekler saçlarını tamamen kazıtır veya kısaltır. Kadınlar saç uçlarından parmak ucu kadar (1-2 cm) keserler.",
      post_step_3: "3. İhramdan Çıkış: Saç kesildikten sonra ihram yasakları kalkar, günlük elbiselerinizi giyebilirsiniz. Umreniz mübarek olsun!",
      btn_explore_ziyarat: "Kutsal Ziyaret Yerlerini Keşfet 📍"
    },
    preparation: {
      tips_title: "İhramın Düşmemesi ve Rahatlık İçin Püf Noktaları",
      tip_1: "📌 Üst Kısmı Kemer Gibi Kıvırın: İzar'ı belinizde bağladıktan sonra üst kısmını dışarıya doğru 2-3 defa rulo yaparak kıvırın. Bu işlem havluyu kilitler ve kaymasını engeller.",
      tip_2: "📌 İhram Kemeri Kullanın: Cırt cırtlı ve cepli ihram kemerleri hem para/telefon taşımanızı sağlar hem de İzar'ı ekstra emniyete alır.",
      tip_3: "📌 Iztıba (Sağ Omuz): Sadece Kabe tavafı yaparken (7 şavt) sağ omuz açık bırakılır. Tavaf bittiğinde namaz kılarken ve Sa'y alanında sağ omuz kapatılır."
    }
  },
  en: {
    tawaf: {
      complete_title: "Alhamdulillah, Your Tawaf is Complete!",
      complete_subtitle: "Upon completing Tawaf, follow these steps in order:",
      post_step_1: "1. Cover Your Right Shoulder: Cover your right shoulder again (end Iztiba) with your Ihram sheet.",
      post_step_2: "2. Pray 2 Rak'ahs of Tawaf Prayer: Pray 2 rak'ahs behind Maqam Ibrahim or anywhere in the Haram (Recite Al-Kafirun in 1st, Al-Ikhlas in 2nd).",
      post_step_3: "3. Drink Zamzam Water: Face the Qibla, drink Zamzam water to your fill, wipe some on your head, and make du'a.",
      post_step_4: "4. Proceed to Sa'y: Walk towards Safa hill to begin your Sa'y.",
      btn_start_sai: "Start Sa'y Ritual ➔"
    },
    sai: {
      complete_title: "Alhamdulillah, Your Sa'y & Umrah is Complete!",
      complete_subtitle: "The 7th lap ends at Marwah. Follow these final steps to exit Ihram:",
      post_step_1: "1. Supplicate at Marwah: Face the Qibla at Marwah hill, praise Allah, and make personal du'a.",
      post_step_2: "2. Haircut / Shaving (Halq/Taqsir): Men shave or shorten hair equally. Women trim a fingertip length (1-2 cm) from hair ends.",
      post_step_3: "3. Exit Ihram: Once hair is cut, all Ihram restrictions end. You may change into ordinary clothes. Mabrouk!",
      btn_explore_ziyarat: "Explore Holy Ziyarat Places 📍"
    },
    preparation: {
      tips_title: "Practical Tips to Secure Your Ihram",
      tip_1: "📌 Roll the Top Edge: After wrapping the Izar at your waist, roll the top edge outwards 2-3 times like a belt. This locks the towel securely.",
      tip_2: "📌 Use an Ihram Belt: Zipped Ihram belts carry money/phone while keeping the Izar firmly secured.",
      tip_3: "📌 Iztiba Rule: Expose your right shoulder ONLY during Tawaf (7 laps). Cover it during prayer and Sa'y."
    }
  },
  ar: {
    tawaf: {
      complete_title: "الحمد لله، تم طوافك بنجاح!",
      complete_subtitle: "عند الانتهاء من الطواف، اتبع الخطوات التالية بالترتيب:",
      post_step_1: "١. تغطية الكتف الأيمن: اغطِ كتفك الأيمن (إنهاء الاضطباع) برداء الإحرام.",
      post_step_2: "٢. صلاة ركعتي الطواف: صلِّ ركعتين خلف مقام إبراهيم أو في أي مكان بالمصلّى (الكافرون في الأولى، والإخلاص في الثانية).",
      post_step_3: "٣. الشرب من ماء زمزم: استقبل القبلة، واشرب من زمزم حتى ترتوي، وامسح به على رأسك وادعُ بما تشاء.",
      post_step_4: "٤. التوجه إلى السعي: اتجه نحو جبل الصفا لبدء السعي.",
      btn_start_sai: "البدء في مناسك السعي ➔"
    },
    sai: {
      complete_title: "الحمد لله، تمت عمرتك بنجاح!",
      complete_subtitle: "ينتهي الشوط السابع عند المروة. اتبع الخطوات لإتمام التحلل من الإحرام:",
      post_step_1: "١. الدعاء عند المروة: استقبل القبلة على جبل المروة، واحمد الله وادعُ بما فتح الله عليك.",
      post_step_2: "٢. الحلق أو التقصير: يحلق الرجال رؤوسهم أو يقصرونها. وتقصر النساء من أطراف شعرهن قدر أنملة (١-٢ سم).",
      post_step_3: "٣. التحلل من الإحرام: بعد قص الشعر تزول محظورات الإحرام ويمكنك ارتداء الثياب العادية. عمرة مقبولة!",
      btn_explore_ziyarat: "استكشاف أماكن الزيارة المقدسة 📍"
    },
    preparation: {
      tips_title: "نصائح عملية لثبات الإحرام وعدم سقطه",
      tip_1: "📌 ثني الحافة العلوية: بعد طي الإزار عند الخصر، اِثنِ الحافة العلوية للخارج ٢-٣ مرات لتثبيته كالحزام.",
      tip_2: "📌 استخدام حزام الإحرام: يساعد حزام الإحرام المزود بسحاب على حفظ الهواتف والأموال وتثبيت الإزار تماماً.",
      tip_3: "📌 حكم الاضطباع: يُسن كشف الكتف الأيمن فقط أثناء الطواف (٧ أشواط)، وتغطيته أثناء الصلاة وفي السعي."
    }
  },
  de: {
    tawaf: {
      complete_title: "Alhamdulillah, Ihr Tawaf ist abgeschlossen!",
      complete_subtitle: "Befolgen Sie nach dem Tawaf diese Schritte in Reihenfolge:",
      post_step_1: "1. Rechten Schulter bedecken: Bedecken Sie Ihre rechte Schulter wieder mit dem Ihram-Tuch.",
      post_step_2: "2. 2 Rak'ah Tawaf-Gebet beten: Beten Sie 2 Rak'ah hinter Maqam Ibrahim oder im Haram.",
      post_step_3: "3. Zamzam-Wasser trinken: Trinken Sie reichlich Zamzam-Wasser mit Blick zur Qibla und sprechen Sie Bittgebete.",
      post_step_4: "4. Zum Sa'y gehen: Gehen Sie zum Hügel Safa, um den Sa'y zu beginnen.",
      btn_start_sai: "Sa'y beginnen ➔"
    },
    sai: {
      complete_title: "Alhamdulillah, Ihre Umrah ist abgeschlossen!",
      complete_subtitle: "Die 7. Runde endet in Marwah. Befolgen Sie diese Schritte zum Verlassen des Ihram:",
      post_step_1: "1. Bittgebet in Marwah: Blicken Sie in Marwah zur Qibla und sprechen Sie Dua.",
      post_step_2: "2. Haarschnitt (Halq/Taqsir): Männer rasieren oder kürzen das Haar. Frauen kürzen eine Spitzenlänge (1-2 cm).",
      post_step_3: "3. Ihram verlassen: Nach dem Haarschnitt enden alle Ihram-Verbote. Umrah Mubarak!",
      btn_explore_ziyarat: "Heilige Ziyarat-Orte erkunden 📍"
    },
    preparation: {
      tips_title: "Praktische Tipps für den sicheren Halt des Ihram",
      tip_1: "📌 Oberkante einrollen: Rollen Sie die Oberkante des Izar 2-3 Mal nach außen wie einen Gürtel ein.",
      tip_2: "📌 Ihram-Gürtel nutzen: Ihram-Gürtel mit Reißverschluss sichern das Tuch und bieten Platz für Wertsachen.",
      tip_3: "📌 Iztiba-Regel: Die rechte Schulter NUR während des Tawaf entblößen. Beim Gebet und Sa'y bedecken."
    }
  },
  ru: {
    tawaf: {
      complete_title: "Альхамдулиллях, ваш Таваф завершен!",
      complete_subtitle: "После завершения Тавафа выполните следующие шаги по порядку:",
      post_step_1: "1. Накройте правое плечо: Снова накройте правое плечо тканью ихрама.",
      post_step_2: "2. Совершите намаз в 2 ракаата: Совершите 2 ракаата за Макамом Ибрахима или в любом месте Харама.",
      post_step_3: "3. Пейте воду Замзам: Повернитесь к Кибле, побейте Замзам досыта и совершите дуа.",
      post_step_4: "4. Перейдите к Са'й: Направьтесь к холму Сафа для начала Са'й.",
      btn_start_sai: "Начать Са'й ➔"
    },
    sai: {
      complete_title: "Альхамдулиллях, ваша Умра завершена!",
      complete_subtitle: "7-й круг заканчивается на Марва. Выполните следующие шаги для выхода из ихрама:",
      post_step_1: "1. Молитва на Марва: Повернитесь к Кибле на холме Марва и совершите дуа.",
      post_step_2: "2. Стрижка волос: Мужчины бреют или подстригают волосы. Женщины подстригают кончики на 1-2 см.",
      post_step_3: "3. Выход из ихрама: После стрижки запреты ихрама снимаются. Поздравляем!",
      btn_explore_ziyarat: "Исследовать святые места Зиярата 📍"
    },
    preparation: {
      tips_title: "Практические советы по надежной фиксации Ихрама",
      tip_1: "📌 Заворачивайте верхний край: Заверните верхний край Изара наружу 2-3 раза, как ремень. Это зафиксирует ткань.",
      tip_2: "📌 Используйте пояс Ихрам: Пояс для Ихрама на молнии защитит ткань от соскальзывания и сохранит вещи.",
      tip_3: "📌 Правило Изтиба: Открывайте правое плечо ТОЛЬКО во время Тавафа. Во время молитвы и Са'й накрывайте его."
    }
  },
  es: {
    tawaf: {
      complete_title: "¡Alhamdulillah, tu Tawaf ha terminado!",
      complete_subtitle: "Al completar el Tawaf, sigue estos pasos en orden:",
      post_step_1: "1. Cúbrete el hombro derecho: Vuelve a cubrir tu hombro derecho con la tela de Ihram.",
      post_step_2: "2. Reza 2 Rak'ahs de Tawaf: Reza 2 rak'ahs detrás de Maqam Ibrahim o en cualquier lugar del Haram.",
      post_step_3: "3. Bebe agua de Zamzam: Mira hacia la Qibla, bebe agua de Zamzam y haz du'a.",
      post_step_4: "4. Ve al Sa'y: Dirígete a la colina de Safa para comenzar el Sa'y.",
      btn_start_sai: "Comenzar el Sa'y ➔"
    },
    sai: {
      complete_title: "¡Alhamdulillah, tu Umrah ha terminado!",
      complete_subtitle: "La 7ª vuelta termina en Marwah. Sigue estos pasos para salir de Ihram:",
      post_step_1: "1. Súplica en Marwah: Mira hacia la Qibla en Marwah y haz du'a.",
      post_step_2: "2. Corte de pelo: Los hombres se afeitan o cortan el pelo. Las mujeres cortan 1-2 cm de las puntas.",
      post_step_3: "3. Salida de Ihram: Después del corte de pelo, terminan las restricciones. ¡Umrah Mubarak!",
      btn_explore_ziyarat: "Explorar Lugares Sagrados de Ziyarat 📍"
    },
    preparation: {
      tips_title: "Consejos Prácticos para Asegurar tu Ihram",
      tip_1: "📌 Enrolla el borde superior: Enrolla el borde superior del Izar hacia afuera 2-3 veces como un cinturón.",
      tip_2: "📌 Usa un cinturón de Ihram: Un cinturón de Ihram con cremallera asegura la tela y guarda tus cosas.",
      tip_3: "📌 Regla de Iztiba: Descubre el hombro derecho SOLO durante el Tawaf. Cúbrelo durante la oración y el Sa'y."
    }
  },
  ko: {
    tawaf: {
      complete_title: "알함두릴라, 타와프가 완료되었습니다!",
      complete_subtitle: "타와프를 마친 후 순서대로 다음 단계를 따르십시오:",
      post_step_1: "1. 오른쪽 어깨 덮기: 이흐람 천으로 오른쪽 어깨를 다시 덮습니다.",
      post_step_2: "2. 타와프 예배 2라카아트 드릴 것: 마캄 이브라힘 뒤나 하람에서 2라카아트를 드립니다.",
      post_step_3: "3. 잠잠 물 마시기: 키블라를 향해 잠잠 물을 마시고 두아를 드립니다.",
      post_step_4: "4. 사아로 이동: 사파 언덕으로 이동하여 사아를 시작합니다.",
      btn_start_sai: "사아 의식 시작 ➔"
    },
    sai: {
      complete_title: "알함두릴라, 움라가 완료되었습니다!",
      complete_subtitle: "7번째 바퀴는 마르와에서 끝납니다. 이흐람 해제를 위해 다음 단계를 따르십시오:",
      post_step_1: "1. 마르와에서 기도: 마르와 언덕에서 키블라를 향해 기도합니다.",
      post_step_2: "2. 머리카락 자르기: 남성은 머리를 깎거나 깎습니다. 여성은 끝부분을 1-2cm 자릅니다.",
      post_step_3: "3. 이흐람 해제: 머리를 자른 후 금지 사항이 해제됩니다. 축하합니다!",
      btn_explore_ziyarat: "성지 지야라 탐방 📍"
    },
    preparation: {
      tips_title: "이흐람 고정을 위한 실용적인 팁",
      tip_1: "📌 상단 허리 말기: 이자르의 상단 끝을 밖으로 2-3번 말아 허리띠처럼 고정합니다.",
      tip_2: "📌 이흐람 벨트 사용: 지퍼가 달린 벨트는 천을 고정하고 소지품을 보관합니다.",
      tip_3: "📌 이즈티바 규칙: 타와프 중에만 오른쪽 어깨를 드러냅니다. 예배 및 사아 중에는 덮으십시오."
    }
  }
};

async function patch() {
  const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];
  
  for (const lang of langs) {
    const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      if (data[lang].tawaf) Object.assign(content.tawaf, data[lang].tawaf);
      if (data[lang].sai) Object.assign(content.sai, data[lang].sai);
      if (data[lang].preparation) Object.assign(content.preparation, data[lang].preparation);
      
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`Patched full i18n content for ${lang}.json`);
    }
  }
}

patch();
