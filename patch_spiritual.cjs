const fs = require('fs');
const path = require('path');

const projectRoot = 'd:\\antigravity\\umrah';

const data = {
  tr: {
    preparation: {
      tefekkur_title: "İhramın Sırrı ve Tefekkürü",
      tefekkur_text: "İhram, dünyevi makam, mevkî ve statülerden sıyrılarak Allah'ın huzurunda salt bir kul olduğumuzu idrak etmektir. Tıpkı mahşer gününde kefenle dirilip Rabbimizin huzurunda eşit olarak toplanacağımız gibi, burada da herkes aynı beyaz örtüye bürünür. 'Ameller niyetlere göredir' (Buhari) sırrınca, burada kalbi dünyadan koparıp sadece O'nun rızasına bağlarız. İhrama girmek bir nevi ölmeden önce ölmektir; gururu, kibri ve dünyalık hırsları o beyaz bezin içinde eritmektir."
    },
    tawaf: {
      tefekkur_title: "Tavafın Sırrı ve Tefekkürü",
      tefekkur_text: "Tavaf, kainatın zikrine katılmaktır. Varlık aleminin merkezinde nasıl çekirdek etrafında dönen elektronlar, güneş etrafında dönen gezegenler varsa, mümin de inancının ve varlığının merkezi olan Kabe'nin etrafında adeta pervaneye döner. Meleklerin gökteki Beytül Ma'mur etrafındaki tavafına yeryüzünde biz eşlik ederiz. Peygamber Efendimiz (s.a.v) şöyle buyurur: 'Kabe'yi tavaf eden, anasından doğduğu günkü gibi günahsız olur.' Hacer-ül Esved'den başlarken, Rabbimize verdiğimiz kulluk sözünü (misak) yenileriz."
    },
    sai: {
      tefekkur_title: "Sa'y'ın Sırrı ve Tefekkürü",
      tefekkur_text: "Sa'y, ıssız bir çölde bir damla su (rahmet) arayan Hz. Hacer validemizin çaresizlik içindeki muazzam tevekkülünün yürüyüşüdür. Safa ile Merve arasında koştururken, aslında onun telaşına, yavrusu İsmail için çırpınışına ve en önemlisi Allah'a olan mutlak güvenine ortak oluruz. Zira biliriz ki, biz elimizden geleni (Sa'y) yaptıktan sonra, Zemzem'i (rahmeti) fışkırtacak olan sadece ve sadece Allah'tır. 'Şüphesiz Safa ile Merve Allah'ın nişanelerindendir...' (Bakara, 158)."
    }
  },
  en: {
    preparation: {
      tefekkur_title: "The Secret and Reflection of Ihram",
      tefekkur_text: "Ihram is about stripping away worldly titles, wealth, and status to realize our pure servitude before Allah. Just as we will be resurrected in shrouds and gathered equally before our Lord on the Day of Judgment, everyone here wraps themselves in the same white cloth. By the secret of 'Deeds are judged by intentions' (Bukhari), we detach our hearts from the world and bind them solely to His pleasure. To enter Ihram is, in a way, to die before dying; it is melting pride, arrogance, and worldly ambitions into that white cloth."
    },
    tawaf: {
      tefekkur_title: "The Secret and Reflection of Tawaf",
      tefekkur_text: "Tawaf is joining the cosmic dhikr (remembrance) of the universe. Just as electrons revolve around a nucleus and planets revolve around the sun, the believer circles the Kaaba like a moth drawn to the center of their existence and faith. We accompany the angels who circumambulate Bayt al-Ma'mur in the heavens. The Prophet (pbuh) said: 'Whoever circumambulates the Kaaba becomes as sinless as the day his mother bore him.' Starting from the Black Stone (Hajar al-Aswad), we renew our covenant of servitude with our Lord."
    },
    sai: {
      tefekkur_title: "The Secret and Reflection of Sa'y",
      tefekkur_text: "Sa'y is the walk of immense reliance (Tawakkul) of our mother Hajar, searching for a drop of water (mercy) in a desolate desert. As we hurry between Safa and Marwa, we share in her urgency, her struggle for her child Ismail, and most importantly, her absolute trust in Allah. We know that once we do our utmost (Sa'y), it is only Allah who causes the Zamzam (mercy) to gush forth. 'Indeed, as-Safa and al-Marwah are among the symbols of Allah...' (Al-Baqarah, 158)."
    }
  },
  ar: {
    preparation: {
      tefekkur_title: "سر الإحرام وتأمله",
      tefekkur_text: "الإحرام هو التجرد من المقامات والمناصب الدنيوية لندرك عبوديتنا الخالصة أمام الله. وكما نُبعث يوم القيامة في أكفاننا ونجتمع سواسية أمام ربنا، يرتدي الجميع هنا نفس الثوب الأبيض. انطلاقاً من سر 'إنما الأعمال بالنيات' (البخاري)، نقطع قلوبنا عن الدنيا ونعلقها بمرضاته وحده. الدخول في الإحرام هو نوع من الموت قبل الموت؛ إنه صهر الكبرياء والغرور والطموحات الدنيوية في ذلك الثوب الأبيض."
    },
    tawaf: {
      tefekkur_title: "سر الطواف وتأمله",
      tefekkur_text: "الطواف هو الانضمام إلى ذكر الكون. كما تدور الإلكترونات حول النواة وتدور الكواكب حول الشمس، يدور المؤمن حول الكعبة كالفراشة التي تنجذب إلى مركز وجودها وإيمانها. نحن نشارك الملائكة الذين يطوفون بالبيت المعمور في السماء. قال النبي ﷺ: 'من طاف بالبيت خرج من ذنوبه كيوم ولدته أمه'. وبداية من الحجر الأسود، نجدد عهد العبودية مع ربنا."
    },
    sai: {
      tefekkur_title: "سر السعي وتأمله",
      tefekkur_text: "السعي هو مشي التوكل العظيم لأمنا هاجر، وهي تبحث عن قطرة ماء (رحمة) في صحراء مقفرة. ونحن نسرع بين الصفا والمروة، نشاركها لهفتها، وسعيها من أجل طفلها إسماعيل، والأهم من ذلك، ثقتها المطلقة في الله. نحن نعلم أنه بمجرد أن نبذل قصارى جهدنا (السعي)، فإن الله وحده هو الذي يفجر زمزم (الرحمة). 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ...' (البقرة، ١٥٨)."
    }
  },
  de: {
    preparation: {
      tefekkur_title: "Das Geheimnis und die Reflexion des Ihram",
      tefekkur_text: "Ihram bedeutet, weltliche Titel, Reichtum und Status abzulegen, um unsere reine Dienerschaft vor Allah zu erkennen. So wie wir am Tag des Jüngsten Gerichts in Leichentüchern auferstehen und gleichwertig vor unserem Herrn versammelt werden, hüllen sich hier alle in dasselbe weiße Tuch. Durch das Geheimnis 'Die Taten werden nach den Absichten beurteilt' (Bukhari) lösen wir unsere Herzen von der Welt und binden sie einzig an Sein Wohlgefallen."
    },
    tawaf: {
      tefekkur_title: "Das Geheimnis und die Reflexion des Tawaf",
      tefekkur_text: "Tawaf bedeutet, sich dem kosmischen Dhikr (Gedenken) des Universums anzuschließen. So wie Elektronen um einen Kern und Planeten um die Sonne kreisen, umkreist der Gläubige die Kaaba wie eine Motte, die zum Zentrum ihrer Existenz und ihres Glaubens gezogen wird. Wir begleiten die Engel, die Bayt al-Ma'mur in den Himmeln umkreisen. Wir erneuern unseren Bund der Dienerschaft mit unserem Herrn, beginnend beim Schwarzen Stein."
    },
    sai: {
      tefekkur_title: "Das Geheimnis und die Reflexion des Sa'y",
      tefekkur_text: "Sa'y ist der Gang des unermesslichen Vertrauens (Tawakkul) unserer Mutter Hajar auf der Suche nach einem Tropfen Wasser (Barmherzigkeit) in einer trostlosen Wüste. Während wir zwischen Safa und Marwa eilen, teilen wir ihre Dringlichkeit, ihren Kampf für ihr Kind Ismail und vor allem ihr absolutes Vertrauen auf Allah. Wir wissen, dass nur Allah Zamzam (Barmherzigkeit) hervorsprudeln lässt, nachdem wir unser Bestes (Sa'y) gegeben haben."
    }
  },
  ru: {
    preparation: {
      tefekkur_title: "Секрет и размышление об Ихраме",
      tefekkur_text: "Ихрам - это отказ от мирских титулов, богатства и статуса, чтобы осознать наше чистое служение перед Аллахом. Подобно тому, как мы будем воскрешены в саванах и собраны равными перед нашим Господом в Судный день, здесь все заворачиваются в одну и ту же белую ткань. Мы отрываем наши сердца от мира и привязываем их исключительно к Его довольству."
    },
    tawaf: {
      tefekkur_title: "Секрет и размышление о Тавафе",
      tefekkur_text: "Таваф - это присоединение к космическому зикру (поминанию) вселенной. Подобно тому, как электроны вращаются вокруг ядра, а планеты - вокруг солнца, верующий кружит вокруг Каабы, как мотылек, влекомый к центру своего существования и веры. Мы сопровождаем ангелов, которые совершают обход вокруг Байт аль-Мамур на небесах."
    },
    sai: {
      tefekkur_title: "Секрет и размышление о Са'е",
      tefekkur_text: "Са'й - это путь безмерного упования (Таваккуль) нашей матери Хаджар, ищущей каплю воды (милости) в пустыне. Когда мы спешим между Сафой и Марвой, мы разделяем ее настойчивость, ее борьбу за ребенка Исмаила и, что наиболее важно, ее абсолютное доверие к Аллаху. Мы знаем, что после того, как мы сделаем все возможное (Са'й), только Аллах заставит Замзам (милость) забить ключом."
    }
  },
  es: {
    preparation: {
      tefekkur_title: "El Secreto y la Reflexión del Ihram",
      tefekkur_text: "El Ihram consiste en despojarse de títulos, riqueza y estatus mundanos para darnos cuenta de nuestra pura servidumbre ante Allah. Así como resucitaremos en sudarios y nos reuniremos por igual ante nuestro Señor en el Día del Juicio, todos aquí se envuelven en la misma tela blanca. Desconectamos nuestros corazones del mundo y los unimos únicamente a Su complacencia."
    },
    tawaf: {
      tefekkur_title: "El Secreto y la Reflexión del Tawaf",
      tefekkur_text: "El Tawaf es unirse al dhikr (recuerdo) cósmico del universo. Así como los electrones giran alrededor de un núcleo y los planetas alrededor del sol, el creyente da vueltas alrededor de la Kaaba como una polilla atraída por el centro de su existencia y fe. Acompañamos a los ángeles que circunvalan Bayt al-Ma'mur en los cielos. Renovamos nuestro pacto de servidumbre con nuestro Señor comenzando desde la Piedra Negra."
    },
    sai: {
      tefekkur_title: "El Secreto y la Reflexión del Sa'y",
      tefekkur_text: "El Sa'y es la caminata de inmensa confianza (Tawakkul) de nuestra madre Hajar, buscando una gota de agua (misericordia) en un desierto desolado. Mientras nos apresuramos entre Safa y Marwa, compartimos su urgencia, su lucha por su hijo Ismail y, lo más importante, su absoluta confianza en Allah. Sabemos que una vez que hagamos nuestro mayor esfuerzo (Sa'y), solo Allah hace que brote Zamzam (misericordia)."
    }
  },
  ko: {
    preparation: {
      tefekkur_title: "이흐람의 비밀과 성찰",
      tefekkur_text: "이흐람은 알라 앞에서의 순수한 종속을 깨닫기 위해 세속적인 직함, 부, 지위를 버리는 것입니다. 심판의 날에 수의를 입고 주님 앞에 평등하게 모이듯, 이곳의 모든 사람들은 같은 흰 천으로 몸을 감쌉니다. 우리는 세상에서 마음을 떼어 오직 그분의 기쁨에만 묶어둡니다."
    },
    tawaf: {
      tefekkur_title: "타와프의 비밀과 성찰",
      tefekkur_text: "타와프는 우주의 우주적 디크르(기억)에 동참하는 것입니다. 전자가 핵을 중심으로 회전하고 행성이 태양을 중심으로 회전하듯, 신자는 자신의 존재와 믿음의 중심에 끌리는 나방처럼 카바 주위를 돕니다. 우리는 천상의 바이트 알-마무르를 도는 천사들과 함께합니다. 검은 돌에서 시작하여 우리는 주님과의 종속의 언약을 새롭게 합니다."
    },
    sai: {
      tefekkur_title: "사아의 비밀과 성찰",
      tefekkur_text: "사아는 황량한 사막에서 물 한 방울(자비)을 찾는 우리 어머니 하자의 엄청난 신뢰(타와쿨)의 발걸음입니다. 우리가 사파와 마르와 사이를 서두를 때, 우리는 그녀의 긴급함, 자녀 이스마일을 위한 투쟁, 그리고 가장 중요한 것은 알라에 대한 그녀의 절대적인 신뢰를 공유합니다. 우리가 최선을 다한 후(사아) 잠잠(자비)이 솟아나게 하시는 분은 오직 알라뿐이라는 것을 우리는 압니다."
    }
  }
};

async function patch() {
  const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];
  
  for (const lang of langs) {
    const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Assign the missing steps
      if (data[lang].preparation) {
        Object.assign(content.preparation, data[lang].preparation);
      }
      if (data[lang].tawaf) {
        Object.assign(content.tawaf, data[lang].tawaf);
      }
      if (data[lang].sai) {
        Object.assign(content.sai, data[lang].sai);
      }
      
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`Patched spiritual content for ${lang}.json`);
    }
  }
}

patch();
