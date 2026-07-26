const fs = require('fs');
const path = require('path');

const projectRoot = 'd:\\antigravity\\umrah';

const data = {
  tr: {
    "step2_title": "İhram Kıyafetlerini Giymek",
    "step2_desc": "Temizliğimizi yaptıktan sonra niyet öncesi ihram kıyafetlerimizi giyeriz.",
    "step2_bullets": [
      "Erkekler için: İç çamaşırı dâhil her türlü dikişli elbiseyi çıkarıp Rida ve İzar denilen iki parça temiz beyaz havluya bürünmek.",
      "Kadınlar için: Özel bir ihram kıyafeti yoktur, günlük temiz ve tesettüre uygun elbiseleri ihram sayılır. Yüzler örtülmez."
    ],
    "step3_title": "İhram Namazı (Sünnet)",
    "step3_desc": "Kıyafetler giyildikten sonra (kerahet vakti değilse) 2 rekat ihram namazı kılınır.",
    "step3_bullets": [
      "Birinci rekatta Fatiha'dan sonra Kafirun Suresi okunması sünnettir.",
      "İkinci rekatta Fatiha'dan sonra İhlas Suresi okunması sünnettir."
    ],
    "step4_title": "Niyet ve Telbiye",
    "step4_desc": "Namazdan sonra veya araca binildiğinde umre için niyet edilir ve telbiye getirilir. İşte bu andan itibaren ihram yasakları başlar.",
    "step4_bullets": [
      "Niyet: 'Allah'ım, senin rızan için umre yapmak istiyorum, onu bana kolaylaştır ve benden kabul eyle.'",
      "Telbiye Duası: 'Lebbeyk Allâhümme lebbeyk, lebbeyke lâ şerîke leke lebbeyk...' (Erkekler yüksek sesle, kadınlar kendi duyacakları sesle)"
    ],
    "step5_title": "İhram Yasaklarına Dikkat Etmek",
    "step5_desc": "İhrama girdikten sonra umre bitene (saç kesilene) kadar dikkat edilmesi gereken yasaklar başlar.",
    "step5_bullets": [
      "Saç, sakal veya tırnak kesmemek, vücuttan kıl koparmamak.",
      "Güzel koku sürmemek, kokulu sabun kullanmamak.",
      "Harem bölgesinin (Mekke'nin) bitkilerini koparmamak.",
      "Tartışmamak, kötü söz söylememek, öfkelenmemek.",
      "(Erkekler için) Başa takke takmamak, dikişli iç çamaşırı veya çorap giymemek."
    ]
  },
  en: {
    "step2_title": "Wearing the Ihram Garments",
    "step2_desc": "After purification and before the intention (niyyah), we wear the ihram garments.",
    "step2_bullets": [
      "For Men: Remove all stitched clothing (including underwear) and wrap yourself in two pieces of clean white unstitched cloth (Rida and Izar).",
      "For Women: There is no specific ihram clothing. Ordinary, clean, and modest clothing serves as ihram. The face and hands remain uncovered."
    ],
    "step3_title": "Ihram Prayer (Sunnah)",
    "step3_desc": "After wearing the garments (if it's not a prohibited time), perform a 2-rak'ah Ihram prayer.",
    "step3_bullets": [
      "It is sunnah to recite Surah Al-Kafirun after Al-Fatihah in the first rak'ah.",
      "It is sunnah to recite Surah Al-Ikhlas after Al-Fatihah in the second rak'ah."
    ],
    "step4_title": "Intention (Niyyah) & Talbiyah",
    "step4_desc": "After the prayer or upon boarding your vehicle, make the intention and recite the Talbiyah. Ihram restrictions begin at this exact moment.",
    "step4_bullets": [
      "Niyyah: 'O Allah, I intend to perform Umrah, so make it easy for me and accept it from me.'",
      "Talbiyah: 'Labbayk Allahumma labbayk, labbayka la sharika laka labbayk...' (Men say it loudly, women quietly)"
    ],
    "step5_title": "Observing Ihram Restrictions",
    "step5_desc": "Once in Ihram, these restrictions apply until you cut your hair at the end of Umrah.",
    "step5_bullets": [
      "Do not cut hair, beard, nails, or pluck body hair.",
      "Do not apply perfumes or use scented soaps.",
      "Do not pluck or cut the plants of the Haram (Makkah).",
      "Do not argue, use bad language, or lose your temper.",
      "(For Men) Do not cover the head, or wear stitched clothes, underwear, or socks."
    ]
  },
  de: {
    "step2_title": "Tragen der Ihram-Kleidung",
    "step2_desc": "Nach der Reinigung und vor der Absicht (Niyyah) legen wir die Ihram-Gewänder an.",
    "step2_bullets": [
      "Für Männer: Alle genähten Kleidungsstücke ausziehen (inkl. Unterwäsche) und zwei ungenähte weiße Tücher (Rida und Izar) anlegen.",
      "Für Frauen: Normale, saubere und bedeckende Kleidung dient als Ihram. Das Gesicht bleibt unbedeckt."
    ],
    "step3_title": "Ihram-Gebet (Sunnah)",
    "step3_desc": "Nach dem Anlegen der Kleidung werden 2 Rak'ah gebetet (außer zu verbotenen Zeiten).",
    "step3_bullets": [
      "Im ersten Rak'ah nach Al-Fatihah die Sure Al-Kafirun rezitieren.",
      "Im zweiten Rak'ah nach Al-Fatihah die Sure Al-Ikhlas rezitieren."
    ],
    "step4_title": "Absicht (Niyyah) & Talbiyah",
    "step4_desc": "Nach dem Gebet wird die Absicht gefasst und die Talbiyah gesprochen. Ab jetzt gelten die Ihram-Verbote.",
    "step4_bullets": [
      "Niyyah: 'O Allah, ich beabsichtige die Umrah zu vollziehen, mache sie mir leicht und nimm sie von mir an.'",
      "Talbiyah: 'Labbayk Allahumma labbayk...' (Männer laut, Frauen leise)"
    ],
    "step5_title": "Ihram-Verbote beachten",
    "step5_desc": "Diese Verbote gelten, bis am Ende der Umrah die Haare geschnitten werden.",
    "step5_bullets": [
      "Keine Haare, Nägel schneiden oder Körperhaare zupfen.",
      "Kein Parfüm oder duftende Seifen verwenden.",
      "Keine Pflanzen des Haram (Mekka) pflücken.",
      "Nicht streiten, fluchen oder wütend werden.",
      "(Für Männer) Den Kopf nicht bedecken, keine genähte Kleidung oder Socken tragen."
    ]
  },
  ar: {
    "step2_title": "لبس ملابس الإحرام",
    "step2_desc": "بعد النظافة وقبل النية، نلبس ملابس الإحرام.",
    "step2_bullets": [
      "للرجال: خلع جميع الملابس المخيطة (بما في ذلك الملابس الداخلية) وارتداء قطعتين من القماش الأبيض النظيف (إزار ورداء).",
      "للنساء: لا يوجد لباس خاص، الثياب العادية النظيفة والمحتشمة تعتبر إحراماً. لا يُغطى الوجه."
    ],
    "step3_title": "ركعتا الإحرام (سنة)",
    "step3_desc": "بعد اللبس، تُصلى ركعتان سنة الإحرام (إذا لم يكن وقت كراهة).",
    "step3_bullets": [
      "يُسن قراءة سورة الكافرون بعد الفاتحة في الركعة الأولى.",
      "يُسن قراءة سورة الإخلاص بعد الفاتحة في الركعة الثانية."
    ],
    "step4_title": "النية والتلبية",
    "step4_desc": "بعد الصلاة تعقد النية وتُلبّي، ومن هذه اللحظة تبدأ محظورات الإحرام.",
    "step4_bullets": [
      "النية: 'اللهم إني نويت العمرة فيسرها لي وتقبلها مني.'",
      "التلبية: 'لبيك اللهم لبيك، لبيك لا شريك لك لبيك...' (الرجال يرفعون أصواتهم، والنساء يسررن بها)"
    ],
    "step5_title": "محظورات الإحرام",
    "step5_desc": "يجب تجنب هذه المحظورات حتى يتم الحلق أو التقصير.",
    "step5_bullets": [
      "عدم قص الشعر أو اللحية أو الأظافر أو نتف الشعر.",
      "عدم وضع الطيب أو استخدام الصابون المعطر.",
      "عدم قطع نبات الحرم.",
      "تجنب الجدال والكلام البذيء والغضب.",
      "(للرجال) عدم تغطية الرأس، وعدم لبس المخيط أو الجوارب."
    ]
  },
  ru: {
    "step2_title": "Облачение в Ихрам",
    "step2_desc": "После очищения и перед намерением мы надеваем одежду ихрам.",
    "step2_bullets": [
      "Для мужчин: Снять всю сшитую одежду (включая нижнее белье) и завернуться в два белых куска ткани (Рида и Изар).",
      "Для женщин: Обычная чистая и закрытая одежда. Лицо остается открытым."
    ],
    "step3_title": "Молитва Ихрама (Сунна)",
    "step3_desc": "После облачения совершается 2 ракаата молитвы (если не запретное время).",
    "step3_bullets": [
      "В первом ракаате после Аль-Фатихи читается сура Аль-Кяфирун.",
      "Во втором ракаате после Аль-Фатихи читается сура Аль-Ихляс."
    ],
    "step4_title": "Намерение (Ният) и Тальбия",
    "step4_desc": "После молитвы произносится намерение и Тальбия. С этого момента начинаются запреты ихрама.",
    "step4_bullets": [
      "Намерение: 'О Аллах, я намереваюсь совершить Умру, облегчи её для меня и прими её.'",
      "Тальбия: 'Ляббайк Аллахумма ляббайк...' (Мужчины читают вслух, женщины - тихо)"
    ],
    "step5_title": "Запреты Ихрама",
    "step5_desc": "Эти запреты действуют до стрижки волос в конце Умры.",
    "step5_bullets": [
      "Не стричь волосы, бороду, ногти.",
      "Не использовать парфюм и ароматизированное мыло.",
      "Не срывать растения Харама (Мекки).",
      "Не спорить, не сквернословить.",
      "(Для мужчин) Не покрывать голову, не носить сшитую одежду и носки."
    ]
  },
  es: {
    "step2_title": "Vestimenta de Ihram",
    "step2_desc": "Después de la purificación, nos ponemos las prendas de Ihram.",
    "step2_bullets": [
      "Hombres: Quitarse toda la ropa cosida (incluida la ropa interior) y envolverse en dos telas blancas sin coser.",
      "Mujeres: Ropa normal, limpia y modesta. El rostro queda descubierto."
    ],
    "step3_title": "Oración del Ihram (Sunnah)",
    "step3_desc": "Después de vestirse, se rezan 2 rak'ahs (si no es tiempo prohibido).",
    "step3_bullets": [
      "Se recomienda recitar Surah Al-Kafirun en el primer rak'ah.",
      "Se recomienda recitar Surah Al-Ikhlas en el segundo rak'ah."
    ],
    "step4_title": "Intención (Niyyah) y Talbiyah",
    "step4_desc": "Luego se declara la intención y la Talbiyah. Las restricciones comienzan aquí.",
    "step4_bullets": [
      "Intención: 'Oh Allah, tengo la intención de hacer la Umrah, facilítamela y acéptala.'",
      "Talbiyah: 'Labbayk Allahumma labbayk...' (Hombres en voz alta, mujeres en voz baja)"
    ],
    "step5_title": "Restricciones del Ihram",
    "step5_desc": "Evite estas acciones hasta cortarse el pelo al final de la Umrah.",
    "step5_bullets": [
      "No cortar pelo ni uñas.",
      "No usar perfume ni jabones aromáticos.",
      "No arrancar plantas en el Haram.",
      "No discutir ni usar malas palabras.",
      "(Hombres) No cubrirse la cabeza ni usar ropa cosida."
    ]
  },
  ko: {
    "step2_title": "이흐람 의복 착용",
    "step2_desc": "순결을 마친 후 의도를 갖기 전에 이흐람 의복을 입습니다.",
    "step2_bullets": [
      "남성: 속옷을 포함한 모든 꿰맨 옷을 벗고 두 장의 흰 천(리다와 이자르)을 두릅니다.",
      "여성: 일반적이고 깨끗하며 단정한 옷이 이흐람 역할을 합니다. 얼굴은 가리지 않습니다."
    ],
    "step3_title": "이흐람 예배 (순나)",
    "step3_desc": "옷을 입은 후 2라카아트의 이흐람 예배를 드립니다.",
    "step3_bullets": [
      "첫 번째 라카아에서는 파티하 뒤에 알-카피룬 장을 읽는 것이 좋습니다.",
      "두 번째 라카아에서는 파티하 뒤에 알-이클라스 장을 읽는 것이 좋습니다."
    ],
    "step4_title": "의도(니야)와 탈비야",
    "step4_desc": "예배 후 의도를 다지고 탈비야를 암송합니다. 이흐람의 금지 사항이 여기서부터 시작됩니다.",
    "step4_bullets": [
      "의도: '오 알라시여, 움라를 수행하고자 하오니 저를 위해 쉽게 해주시고 받아주소서.'",
      "탈비야: '랍바이크 알라훔마 랍바이크...' (남성은 큰 소리로, 여성은 조용히)"
    ],
    "step5_title": "이흐람 금지 사항 준수",
    "step5_desc": "움라가 끝날 때 머리카락을 자를 때까지 다음 사항을 피하십시오.",
    "step5_bullets": [
      "머리카락, 수염, 손톱을 자르거나 털을 뽑지 마십시오.",
      "향수나 향이 나는 비누를 사용하지 마십시오.",
      "하람(메카)의 식물을 꺾지 마십시오.",
      "다투거나 나쁜 말을 하지 마십시오.",
      "(남성) 머리를 덮거나 꿰맨 옷, 양말을 신지 마십시오."
    ]
  }
};

async function patch() {
  const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];
  
  for (const lang of langs) {
    const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Assign the missing steps
      Object.assign(content.preparation, data[lang]);
      
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`Patched ${lang}.json`);
    }
  }
}

patch();
