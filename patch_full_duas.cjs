const fs = require('fs');
const path = require('path');

const projectRoot = 'd:\\antigravity\\umrah';

const data = {
  tr: {
    preparation: {
      step4_bullets: [
        "Niyet: 'Allah'ım, senin rızan için umre yapmak istiyorum, onu bana kolaylaştır ve benden kabul eyle.'",
        "Telbiye Duası: 'Lebbeyk Allâhümme lebbeyk, lebbeyke lâ şerîke leke lebbeyk, innel-hamde ven-ni'mete leke vel-mülk, lâ şerîke lek.' (Erkekler yüksek sesle, kadınlar kendi duyacakları sesle söylerler)."
      ]
    },
    duas: {
      talbiyah: {
        title: "Telbiye Duası (Tam Metin)",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
        transliteration: "Lebbeyk Allâhümme lebbeyk, lebbeyke lâ şerîke leke lebbeyk, innel-hamde ven-ni'mete leke vel-mülk, lâ şerîke lek.",
        translation: "Buyur Allah'ım buyur! Buyur, senin hiçbir ortağın yoktur, buyur! Şüphesiz hamd de, nimet de, mülk de senindir. Senin hiçbir ortağın yoktur."
      }
    }
  },
  en: {
    preparation: {
      step4_bullets: [
        "Niyyah: 'O Allah, I intend to perform Umrah, so make it easy for me and accept it from me.'",
        "Talbiyah: 'Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.' (Men recite loudly, women quietly)."
      ]
    },
    duas: {
      talbiyah: {
        title: "The Full Talbiyah Prayer",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
        transliteration: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.",
        translation: "Here I am O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise, grace, and sovereignty belong to You. You have no partner."
      }
    }
  },
  ar: {
    preparation: {
      step4_bullets: [
        "النية: 'اللهم إني نويت العمرة فيسرها لي وتقبلها مني.'",
        "التلبية: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ' (الرجال يرفعون أصواتهم، والنساء يسررن بها)."
      ]
    },
    duas: {
      talbiyah: {
        title: "دعاء التلبية الكامل",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
        transliteration: "Labbayk Allāhumma labbayk, labbayka lā sharīka laka labbayk, inna-l-ḥamda wan-ni'mata laka wal-mulk, lā sharīka lak.",
        translation: "لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك."
      }
    }
  },
  de: {
    preparation: {
      step4_bullets: [
        "Niyyah: 'O Allah, ich beabsichtige die Umrah zu vollziehen, mache sie mir leicht und nimm sie von mir an.'",
        "Talbiyah: 'Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.' (Männer laut, Frauen leise)."
      ]
    },
    duas: {
      talbiyah: {
        title: "Vollständiges Talbiyah-Gebet",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
        transliteration: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.",
        translation: "Hier bin ich, o Allah, hier bin ich. Hier bin ich, Du hast keinen Teilhaber, hier bin ich. Gewiss, alles Lob, alle Gunst und die Herrschaft gehören Dir. Du hast keinen Teilhaber."
      }
    }
  },
  ru: {
    preparation: {
      step4_bullets: [
        "Намерение: 'О Аллах, я намереваюсь совершить Умру, облегчи её для меня и прими её.'",
        "Тальбия: 'Ляббайк Аллахумма ляббайк, ляббайка ля шарика ляка ляббайк, инналь-хамда ван-ни'мата ляка валь-мульк, ля шарика ляк.' (Мужчины читают вслух, женщины - тихо)."
      ]
    },
    duas: {
      talbiyah: {
        title: "Полный текст молитвы Тальбия",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
        transliteration: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.",
        translation: "Вот я перед Тобой, о Аллах, вот я перед Тобой. Вот я перед Тобой, нет у Тебя сотоварища, вот я перед Тобой. Поистине, вся хвала, милость и владычество принадлежат Тебе, нет у Тебя сотоварища!"
      }
    }
  },
  es: {
    preparation: {
      step4_bullets: [
        "Intención: 'Oh Allah, tengo la intención de hacer la Umrah, facilítamela y acéptala.'",
        "Talbiyah: 'Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.' (Hombres en voz alta, mujeres en voz baja)."
      ]
    },
    duas: {
      talbiyah: {
        title: "Oración Completa de la Talbiyah",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
        transliteration: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.",
        translation: "Aquí estoy, oh Allah, aquí estoy. Aquí estoy, no tienes asociado, aquí estoy. Ciertamente toda alabanza, gracia y soberanía Te pertenecen. No tienes asociado."
      }
    }
  },
  ko: {
    preparation: {
      step4_bullets: [
        "의도: '오 알라시여, 움라를 수행하고자 하오니 저를 위해 쉽게 해주시고 받아주소서.'",
        "탈비야: '랍바이크 알라훔마 랍바이크, 랍바이카 라 샤리카 라카 랍바이크, 인날-함다 완-니마타 라카 완-물크, 라 샤리카 락.' (남성은 큰 소리로, 여성은 조용히)."
      ]
    },
    duas: {
      talbiyah: {
        title: "전체 탈비야 기도문",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
        transliteration: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.",
        translation: "알라시여 제가 여기 있나이다. 제가 여기 있나이다. 당신께는 어떤 동반자도 없나이다. 모든 찬미와 은혜와 주권이 당신께 있나이다."
      }
    }
  }
};

async function patch() {
  const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];
  
  for (const lang of langs) {
    const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      if (data[lang].preparation) {
        Object.assign(content.preparation.step4_bullets, data[lang].preparation.step4_bullets);
      }
      if (data[lang].duas) {
        content.duas.talbiyah = data[lang].duas.talbiyah;
      }
      
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`Patched full Talbiyah prayer for ${lang}.json`);
    }
  }
}

patch();
