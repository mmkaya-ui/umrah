const fs = require('fs');
const path = require('path');

const projectRoot = 'd:/antigravity/umrah';

const wishesData = {
  tr: {
    wishes: {
      home: "Rabbim Umrenizi makbul, dualarınızı kabul eylesin. Attığınız her adım kalbinize huzur, ömrünüze bereket olsun. 🤲✨",
      preparation: "Niyetiniz halis, ibadetiniz kolay olsun. Rabbim sizi günahlardan arınmış, kalbi pür-pak bir şekilde evinize döndürsün. 🤍✨",
      tawaf: "Kabe-i Muazzama etrafında döndüğünüz her şavt ruhunuzu aydınlatsın. Dualarınız Arş-ı Âlâ'ya ulaşsın. 🕋✨",
      sai: "Hz. Hacer annemizin teslimiyeti ve sabrı yüreğinize dolsun. Rabbim arayışlarınızı rahmetle neticelendirsin. 💚✨",
      dhikr: "Diliniz zikirle, kalbiniz Nûr-ı İlahi ile dolsun. Anılan her esma ruhunuza şifa, ömrünüze huzur olsun. 📿✨",
      ziyarat: "Peygamber Efendimizin (s.a.v.) ve Ashabının bastığı kutsal topraklardan feyiz ve şefaatle dönmenizi niyaz ederiz. 🌹✨",
      practical: "Kutsal beldelerdeki her anınız kolaylıkla ve huzurla geçsin. Rabbim ibadetlerinizi kabul buyursun. 🤲✨"
    }
  },
  en: {
    wishes: {
      home: "May Allah accept your Umrah and answer your prayers. May every step you take bring peace to your heart and blessings to your life. 🤲✨",
      preparation: "May your intention be pure and your journey easy. May Allah return you home cleansed of all sins with a pure heart. 🤍✨",
      tawaf: "May every circuit around the Holy Kaaba illuminate your soul. May your prayers reach the Highest Heavens. 🕋✨",
      sai: "May the devotion and patience of Mother Hajar fill your heart. May Allah reward your efforts with endless mercy. 💚✨",
      dhikr: "May your tongue remain moist with remembrance of Allah and your heart filled with Divine Light. May every dhikr bring healing and tranquility. 📿✨",
      ziyarat: "May you return blessed with the intercession of Prophet Muhammad (pbuh) and the spiritual grace of his Companions. 🌹✨",
      practical: "May every moment in the Holy Lands pass with ease and tranquility. May Allah accept your acts of worship. 🤲✨"
    }
  },
  ar: {
    wishes: {
      home: "تقبل الله عمرتكم واستجاب دعاءكم، وجعل كل خطوة تخطونها سكينة لقلوبكم وبركة في أعماركم. 🤲✨",
      preparation: "خالص النية ويسر السعي، أعادكم الله إلى دياركم طاهري القلوب مغفوري الذنوب. 🤍✨",
      tawaf: "جعَل الله كل شوط تطوفونه حول الكعبة المشرّفة نوراً لأرواحكم، ودعاءً مستجاباً واصلاً إلى العرش. 🕋✨",
      sai: "ملأ الله قلبكم بيقين وصبر أمنا هاجر عليها السلام، وتوّج سعيكم بالرحمة والقبول. 💚✨",
      dhikr: "عطّر الله لسانكم بذكر ومغفرته، وأشعل في قلوبكم نور الإيمان والسكينة. 📿✨",
      ziyarat: "رزقكم الله نيل شفاعة النبي المصطفى ﷺ، وجعل زيارتكم للمشاهد المقدسة بركة ونوراً. 🌹✨",
      practical: "جعل الله كل لحظة في البقاع المقدسة يسرًا وسكينة، وتقبل طاعاتكم. 🤲✨"
    }
  },
  de: {
    wishes: {
      home: "Möge Allah Ihre Umrah annehmen und Ihre Gebete erhörten. Möge jeder Schritt Frieden in Ihr Herz und Segen in Ihr Leben bringen. 🤲✨",
      preparation: "Möge Ihre Absicht rein und Ihre Reise leicht sein. Möge Allah Sie von allen Sünden gereinigt nach Hause zurückkehren lassen. 🤍✨",
      tawaf: "Möge jede Runde um die Heilige Kaaba Ihre Seele erleuchten. Mögen Ihre Gebete den Höchsten Thron erreichen. 🕋✨",
      sai: "Möge die Hingabe und Geduld von Mutter Hajar Ihr Herz erfüllen. Möge Allah Ihre Bemühungen mit unendlicher Barmherzigkeit belohnen. 💚✨",
      dhikr: "Möge Ihre Zunge stets feucht vom Gedenken Allahs bleiben und Ihr Herz mit göttlichem Licht erfüllt sein. 📿✨",
      ziyarat: "Mögen Sie reich gesegnet mit der Fürsprache des Propheten Muhammad (s.a.w.) heimkehren. 🌹✨",
      practical: "Möge jeder Augenblick in den Heiligen Stätten voller Leichtigkeit und Seelenfrieden verlaufen. 🤲✨"
    }
  },
  ru: {
    wishes: {
      home: "Пусть Аллах примет вашу Умру и ответит на ваши молитвы. Пусть каждый ваш шаг принесет мир в ваше сердце и благословение в вашу жизнь. 🤲✨",
      preparation: "Пусть ваши намерения будут искренними, а путешествие легким. Пусть Аллах вернет вас домой очищенными от грехов. 🤍✨",
      tawaf: "Пусть каждый круг вокруг Священной Каабы озаряет вашу душу. Пусть ваши молитвы достигнут Вышнего Престола. 🕋✨",
      sai: "Пусть преданность и терпение матери Хаджар наполнят ваше сердце. Пусть Аллах вознаградит ваши старания бесконечной милостью. 💚✨",
      dhikr: "Пусть ваш язык всегда будет увлечен поминанием Аллаха, а сердце наполнено божественным светом. 📿✨",
      ziyarat: "Пусть вы вернетесь благословленными заступничеством Пророка Мухаммада ﷺ и духовной благодатью Его Сподвижников. 🌹✨",
      practical: "Пусть каждое мгновение в Святых землях проходит с легкостью и умиротворением. 🤲✨"
    }
  },
  es: {
    wishes: {
      home: "Que Allah acepte su Umrah y responda a sus oraciones. Que cada paso que dé traiga paz a su corazón y bendiciones a su vida. 🤲✨",
      preparation: "Que su intención sea pura y su viaje sea fácil. Que Allah le haga regresar a casa purificado de todo pecado. 🤍✨",
      tawaf: "Que cada vuelta alrededor de la Sagrada Kaaba ilumine su alma. Que sus oraciones lleguen a los Cielos Más Altos. 🕋✨",
      sai: "Que la devoción y la paciencia de la Madre Hajar me llenen el corazón. Que Allah recompense sus esfuerzos con infinita misericordia. 💚✨",
      dhikr: "Que su lengua permanezca húmeda con el recuerdo de Allah y su corazón lleno de Luz Divina. 📿✨",
      ziyarat: "Que regrese bendecido con la intercesión del Profeta Muhammad (pyb) y la gracia espiritual de sus Compañeros. 🌹✨",
      practical: "Que cada momento en las Tierras Santas transcurra con facilidad y tranquilidad. 🤲✨"
    }
  },
  ko: {
    wishes: {
      home: "알라께서 당신의 움라를 받아주시고 기도를 들어주시기를. 당신의 모든 발걸음이 마음의 평화와 삶의 축복으로 이어지기를 바랍니다. 🤲✨",
      preparation: "당신의 의도가 순수하고 여정이 평안하기를. 알라께서 모든 죄를 사하시고 깨끗한 마음으로 집으로 돌아가게 하시기를 바랍니다. 🤍✨",
      tawaf: "성스러운 카바를 도는 모든 순간이 당신의 영혼을 밝혀주기를. 당신의 기도가 가장 높은 하늘에 닿기를 바랍니다. 🕋✨",
      sai: "하디자 여사의 헌신과 인내가 당신의 마음에 가득하기를. 알라께서 당신의 노력을 끝없는 자비로 보답하시기를 바랍니다. 💚✨",
      dhikr: "당신의 혀가 알라를 기리는 기억으로 젖어 있고 마음에 신성한 빛이 가득하기를 바랍니다. 📿✨",
      ziyarat: "예언자 무함마드(평화가 그에게 있기를)의 중보와 동반자들의 영적인 은혜로 축복받고 돌아오시기를 기원합니다. 🌹✨",
      practical: "성지에서의 모든 순간이 평안과 축복으로 가득하기를 바랍니다. 🤲✨"
    }
  }
};

const langs = ['tr', 'en', 'de', 'ar', 'ru', 'es', 'ko'];

for (const lang of langs) {
  const filePath = path.join(projectRoot, 'public', 'locales', `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    content.wishes = wishesData[lang].wishes;
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Patched wishes for ${lang}.json`);
  }
}
