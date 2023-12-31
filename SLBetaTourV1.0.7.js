//Developed by: @PapaMbao

function updateHelperCSS() {
  var helperLayer = document.querySelector('.introjs-helperLayer');
  if (helperLayer) {
    helperLayer.style.boxShadow = 'rgba(115, 115, 115, 0.8) 0px 0px 1px 2px, rgba(115, 115, 115, 0.5) 0px 0px 0px 5000px';
  }
}

function observeHelperLayer() {
  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type === 'childList') {
        var addedNodes = mutation.addedNodes;
        for (var i = 0; i < addedNodes.length; i++) {
          if (addedNodes[i].classList && addedNodes[i].classList.contains('introjs-helperLayer')) {
            updateHelperCSS();
          }
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
observeHelperLayer();

function introTour(language) {
  var translations = {
    intro: {
      english: 'Welcome to the course! This is the slide area where the course content will be displayed. Use the navigation buttons to move between slides.',
      russian: 'Добро пожаловать на курс! Это область слайдов, где будет отображаться содержимое курса. Используйте кнопки навигации для перемещения между слайдами.',
      polish: 'Witamy na kursie! Jest to obszar slajdu, w którym będzie wyświetlana treść kursu. Do poruszania się pomiędzy slajdami służą przyciski nawigacyjne.',
      german: 'Willkommen im Kurs! Dies ist der Folienbereich, in dem die Kursinhalte angezeigt werden. Verwenden Sie die Navigationstasten, um zwischen den Folien zu wechseln.',
      spanish: '¡Bienvenido al curso! Esta es el área de diapositivas donde se mostrará el contenido del curso. Utiliza los botones de navegación para moverte entre las diapositivas.',
      french: 'Bienvenue dans le cours ! C\'est ici que sera affiché le contenu du cours. Utilisez les boutons de navigation pour passer d\'une diapositive à l\'autre.',
      mandarin: '欢迎来到课程！这是显示课程内容的幻灯片区域。使用导航按钮在幻灯片之间移动。',
      portuguese: 'Bem-vindo ao curso! Esta é a área do slide onde o conteúdo do curso será exibido. Use os botões de navegação para se mover entre os slides.'
    },
    resources: {
      english: 'Here, you can access resources related to the course. Select a link to access that resource in a new window.',
      russian: 'هنا يمكنك العثور على موارد مفيدة تتعلق بالدورة. انقر على الروابط للوصول إلى مواد إضافية أو مراجع.',
      polish: 'یہاں آپ کورس سے متعلق مددگار وسائل تلاش کر سکتے ہیں. اضافی مواد یا حوالے تک رسائی حاصل کرنے کے لئے لنکس پر کلک کریں.',
      german: 'Hier vind je nuttige bronnen gerelateerd aan de cursus. Klik op de links om extra materiaal of referenties te openen.',
      spanish: 'Aquí puedes encontrar recursos útiles relacionados con el curso. Haz clic en los enlaces para acceder a materiales adicionales o referencias.',
      french: 'Ici, vous pouvez trouver des ressources utiles liées au cours. Cliquez sur les liens pour accéder à des matériaux supplémentaires ou des références.',
      mandarin: '在这里，您可以找到与课程相关的有用资源。点击链接访问额外的材料或参考资料。',
      portuguese: 'Aqui você pode encontrar recursos úteis relacionados ao curso. Clique nos links para acessar materiais adicionais ou referências.'
    },
    menu: {
      english: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      russian: 'يقع قائمة الدورة هنا. يوفر نظرة عامة على هيكل الدورة ويتيح لك الانتقال إلى أقسام أو وحدات محددة.',
      polish: 'کورس کی مینو یہاں موجود ہے. یہ کورس کی ساخت کا ایک جائزہ دیتی ہے اور آپ کو خاص حصوں یا ماڈیولز میں جانے کی اجازت دیتی ہے.',
      german: 'Het cursusmenu bevindt zich hier. Het biedt een overzicht van de cursusstructuur en stelt je in staat om naar specifieke secties of modules te springen.',
      spanish: 'El menú del curso se encuentra aquí. Proporciona una visión general de la estructura del curso y te permite saltar a secciones o módulos específicos.',
      french: 'Le menu du cours est situé ici. Il donne un aperçu de la structure du cours et vous permet de passer à des sections ou des modules spécifiques.',
      mandarin: '课程菜单位于此处。它提供了课程结构的概述，并允许您跳转到特定的部分或模块。',
      portuguese: 'O menu do curso está localizado aqui. Ele fornece uma visão geral da estrutura do curso e permite que você salte para seções ou módulos específicos.'
    },
    playback: {
      english: 'These controls allow you to play or pause the slide playback. You can control the pace of the course content based on your preferences.',
      russian: 'تتيح لك هذه المراقبات تشغيل أو إيقاف تشغيل تشغيل الشرائح. يمكنك التحكم في وتيرة محتوى الدورة بناءً على تفضيلاتك.',
      polish: 'یہ کنٹرولز آپ کو اسلائیڈ پلے بیک کو چلانے یا روکنے کی اجازت دیتے ہیں. آپ اپنی ترجیحات کے مطابق کورس مواد کی رفتار کو کنٹرول کرسکتے ہیں.',
      german: 'Met deze bedieningselementen kun je de diavoorstelling afspelen of pauzeren. Je kunt de snelheid van de cursusinhoud naar wens regelen.',
      spanish: 'Estos controles te permiten reproducir o pausar la reproducción de diapositivas. Puedes controlar el ritmo del contenido del curso según tus preferencias.',
      french: 'Ces commandes vous permettent de lire ou de mettre en pause la lecture des diapositives. Vous pouvez contrôler le rythme du contenu du cours en fonction de vos préférences.',
      mandarin: '这些控件允许您播放或暂停幻灯片播放。您可以根据自己的偏好控制课程内容的节奏。',
      portuguese: 'Esses controles permitem que você reproduza ou pause a reprodução dos slides. Você pode controlar o ritmo do conteúdo do curso com base em suas preferências.'
    },
    volume: {
      english: 'Change the intensity of sound in this course.',
      russian: 'هذا الزر يسمح لك بتمكين أو تعطيل الشرح لمحتوى الدورة. انقر عليه لتبديل الشرح تشغيل أو إيقاف.',
      polish: 'اس بٹن کی مدد سے آپ کورس کی مواد کے لئے شرح کو فعال یا غیرفعال کرسکتے ہیں. اس پر کلک کریں تاکہ شرح کو آن یا آف کریں.',
      german: 'Deze knop stelt u in staat om bijschriften voor de cursusinhoud in of uit te schakelen. Klik erop om bijschriften aan of uit te zetten.',
      spanish: 'Este botón te permite habilitar o deshabilitar los subtítulos para el contenido del curso. Haz clic en él para activar o desactivar los subtítulos.',
      french: 'Ce bouton vous permet d\'activer ou de désactiver les sous-titres pour le contenu du cours. Cliquez dessus pour activer ou désactiver les sous-titres.',
      mandarin: '此按钮可让您启用或禁用课程内容的字幕。单击它以切换字幕的开启或关闭状态。',
      portuguese: 'Este botão permite que você habilite ou desabilite legendas para o conteúdo do curso. Clique nele para ativar ou desativar as legendas.'
    },
     captions: {
      english: 'This button allows you to enable or disable captions for the course content.',
      russian: 'هذا الزر يسمح لك بتمكين أو تعطيل الشرح لمحتوى الدورة. انقر عليه لتبديل الشرح تشغيل أو إيقاف.',
      polish: 'اس بٹن کی مدد سے آپ کورس کی مواد کے لئے شرح کو فعال یا غیرفعال کرسکتے ہیں. اس پر کلک کریں تاکہ شرح کو آن یا آف کریں.',
      german: 'Deze knop stelt u in staat om bijschriften voor de cursusinhoud in of uit te schakelen. Klik erop om bijschriften aan of uit te zetten.',
      spanish: 'Este botón te permite habilitar o deshabilitar los subtítulos para el contenido del curso. Haz clic en él para activar o desactivar los subtítulos.',
      french: 'Ce bouton vous permet d\'activer ou de désactiver les sous-titres pour le contenu du cours. Cliquez dessus pour activer ou désactiver les sous-titres.',
      mandarin: '此按钮可让您启用或禁用课程内容的字幕。单击它以切换字幕的开启或关闭状态。',
      portuguese: 'Este botão permite que você habilite ou desabilite legendas para o conteúdo do curso. Clique nele para ativar ou desativar as legendas.'
    },
     speed: {
      english: 'To change the speed of a published course, simply click or tap the playback speed icon and choose any speed between 0.25x and 2x.',
      russian: '-------',
      polish: '-----',
      german: '-------',
      spanish: '-------',
      french: '-------',
      mandarin: '-------',
      portuguese: '-------'
    },
     settings: {
      english: 'Storyline 360 makes strides toward that customized experience with accessibility controls that allow learners to change the zoom mode, turn accessible text on or off, toggle keyboard shortcuts, and turn background audio on or off.',
      russian: '-------',
      polish: '-----',
      german: '-------',
      spanish: '-------',
      french: '-------',
      mandarin: '-------',
      portuguese: '-------'
    },
    full: {
      english: 'Experience the joy of complete immersion and elevate your digital encounters to new heights with Full Screen Mode.',
      russian: 'جرب متعة الانغماس الكامل وارتق بمواجهاتك الرقمية إلى آفاق جديدة مع وضع ملء الشاشة.',
      polish: 'مکمل وسرجن کی خوشی کا تجربہ کریں اور فل سکرین موڈ کے ساتھ اپنے ڈیجیٹل مقابلوں کو نئی بلندیوں تک لے جائیں۔.',
      german: 'Erleben Sie die Freude am vollständigen Eintauchen und heben Sie Ihre digitalen Begegnungen mit dem Vollbildmodus auf ein neues Niveau.',
      spanish: 'Experimente la alegría de una inmersión completa y eleve sus encuentros digitales a nuevas alturas con el modo de pantalla completa.',
      french: 'Découvrez la joie d\'une immersion complète et élevez vos rencontres numériques vers de nouveaux sommets avec le mode plein écran.',
      mandarin: '体验完全沉浸的乐趣，并通过全屏模式将您的数字体验提升到新的高度。',
      portuguese: 'Experimente a alegria da imersão completa e eleve seus encontros digitais a novos patamares com o modo de tela inteira.'
    },
    next: {
      english: 'To move to the next slide, select the next button. If that button is not active, there is more to complete on the current slide.',
      russian: 'للانتقال إلى الشريحة التالية، انقر على زر "التالي". سوف ينقلك إلى الموضوع أو الوحدة التالية في الدورة.',
      polish: 'اگلی سلائیڈ پر منتقل ہونے کے لئے "اگلے" بٹن پر کلک کریں. یہ آپ کو کورس میں اگلے موضوع یا ماڈیول پر لے جائے گا.',
      german: 'Klik op de knop "Volgende" om naar de volgende dia te gaan. Het brengt je naar het volgende onderwerp of module in de cursus.',
      spanish: 'Para pasar a la siguiente diapositiva, haz clic en el botón "Siguiente". Te llevará al siguiente tema o módulo del curso.',
      french: 'Pour passer à la diapositive suivante, cliquez sur le bouton "Suivant". Il vous conduira au sujet ou module suivant dans le cours.',
      mandarin: '要进入下一张幻灯片，请单击“下一页”按钮。它将带您进入课程中的下一个主题或模块。',
      portuguese: 'Para avançar para o próximo slide, clique no botão "Próximo". Ele o levará para o próximo tópico ou módulo no curso.'
    },
    prev: {
      english: 'If you want to return to the last slide, select the previous button.',
      russian: 'إذا كنت ترغب في العودة إلى الشريحة السابقة، استخدم زر "السابق". سيوجهك إلى الموضوع أو الوحدة السابقة.',
      polish: 'اگر آپ پچھلی سلائیڈ پر واپس جانا چاہتے ہیں تو "پچھلا" بٹن استعمال کریں. یہ آپ کو کورس میں پچھلے موضوع یا ماڈیول پر نیویگیٹ کرے گا.',
      german: 'Als je terug wilt naar de vorige dia, gebruik dan de knop "Vorige". Het zal je naar het vorige onderwerp of module navigeren.',
      spanish: 'Si deseas volver a la diapositiva anterior, utiliza el botón "Anterior". Te llevará al tema o módulo anterior.',
      french: 'Si vous souhaitez revenir à la diapositive précédente, utilisez le bouton "Précédent". Il vous ramènera au sujet ou module précédent.',
      mandarin: '如果您想返回上一张幻灯片，请使用“上一页”按钮。它将使您导航到前一个主题或模块。',
      portuguese: 'Se você deseja voltar para o slide anterior, use o botão "Anterior". Ele irá levá-lo de volta ao tópico ou módulo anterior.'
    },
    titles: {
      english: {
        slide: 'Slide',
        resources: 'Helpful Resources',
        menu: 'Course Menu',
        playback: 'Slide Playback Control',
        volume: 'Volume',
        captions: 'Captions',
        speed: 'Playback Speed',
        settings: 'Accessibility Settings',
        full: 'Full-screen mode',
        next: 'Next Slide Button',
        prev: 'Previous Slide Button'
      },
      russian: {
        slide: 'الشريحة',
        resources: 'موارد مفيدة',
        menu: 'قائمة الدورة',
        playback: 'تحكم تشغيل الشرائح',
        volume: 'Volume',
        captions: 'الشرح',
        speed: '-----',
        settings: '---',
        full: 'أدخل وضع ملء الشاشة',
        next: 'زر التالي',
        prev: 'زر السابق'
      },
      polish: {
        slide: 'سلائیڈ',
        resources: 'مددگار وسائل',
        menu: 'کورس مینو',
        playback: 'اسلائیڈ پلے بیک کنٹرول',
        volume: 'Volume',
        captions: 'کیپشنز',
        speed: '-----',
        settings: '---',
        full: 'فل سکرین موڈ میں داخل ہوں۔',
        next: 'اگلے سلائیڈ بٹن',
        prev: 'پچھلے سلائیڈ بٹن'
      },
      german: {
        slide: 'Schuif',
        resources: 'Nuttige bronnen',
        menu: 'Cursusmenu',
        playback: 'Afspelen van diavoorstelling bedienen',
        volume: 'Volume',
        captions: 'Bijschriften',
        speed: '-----',
        settings: '---',
        full: 'Wechseln Sie in den Vollbildmodus',
        next: 'Volgende dia knop',
        prev: 'Vorige dia knop'
      },
      spanish: {
        slide: 'Diapositiva',
        resources: 'Recursos útiles',
        menu: 'Menú del curso',
        playback: 'Control de reproducción de diapositivas',
        volume: 'Volume',
        captions: 'Subtítulos',
        speed: '-----',
        settings: '---',
        full: 'Entrar en modo de pantalla completa',
        next: 'Botón de siguiente diapositiva',
        prev: 'Botón de diapositiva anterior'
      },
      french: {
        slide: 'Diapositive',
        resources: 'Ressources utiles',
        menu: 'Menu du cours',
        playback: 'Contrôle de lecture des diapositives',
        volume: 'Volume',
        captions: 'Sous-titres',
        speed: '-----',
        settings: '---',
        full: 'Entrer en mode plein écran',
        next: 'Bouton de diapositive suivante',
        prev: 'Bouton de diapositive précédente'
      },
      mandarin: {
        slide: '幻灯片',
        resources: '有用资源',
        menu: '课程菜单',
        playback: '幻灯片播放控制',
        volume: 'Volume',
        captions: '字幕',
        speed: '-----',
        settings: '---',
        full: '进入全屏模式',
        next: '下一张幻灯片按钮',
        prev: '上一张幻灯片按钮'
      },
      portuguese: {
        slide: 'Slide',
        resources: 'Recursos úteis',
        menu: 'Menu do curso',
        playback: 'Controle de reprodução de slides',
        volume: 'Volume',
        captions: 'Legendas',
        speed: '-----',
        settings: '---',
        full: 'Entrar no modo de tela cheia',
        next: 'Botão de próximo slide',
        prev: 'Botão de slide anterior'
      }
    }
  }

  introJs().setOptions({
    steps: [
      {
        element: '.acc-blocker',
        intro: translations['intro'][language],
        title: translations['titles'][language]['slide'],
      },
      {
        element: '#outline-link',
        intro: translations['menu'][language],
        title: translations['titles'][language]['menu'],
      },
      // Conditionally add the step only if introResources is not true
      ...(player.GetVar('introResources') !== true ? [
        {
          element: '#resources-link',
          intro: translations['resources'][language],
          title: translations['titles'][language]['resources'],
        },
      ] : []),
      {
        element: '#playback-controls',
        intro: translations['playback'][language],
        title: translations['titles'][language]['playback'],
      },
      {
        element: '#volume',
        intro: translations['volume'][language],
        title: translations['titles'][language]['volume'],
      },
      // Conditionally add the step only if introCaptionss is not true
      ...(player.GetVar('introCaptions') !== true ? [
        {
        element: '#captions',
        intro: translations['captions'][language],
        title: translations['titles'][language]['captions'],
        },
      ] : []),
      // Conditionally add the step only if introCaptions is not true
      ...(player.GetVar('introSpeed') !== true ? [
        {
        element: '#playback-speed',
        intro: translations['speed'][language],
        title: translations['titles'][language]['speed'],
        },
      ] : []),
      // Conditionally add the step only if introSettings is not true
      ...(player.GetVar('introSettings') !== true ? [
        {
        element: '#settings',
        intro: translations['settings'][language],
        title: translations['titles'][language]['settings'],
        },
      ] : []),
      // Conditionally add the step only if introFullScreen is not true
      ...(player.GetVar('introFullScreen') !== true ? [
        {
        element: '#full-screen-toggle',
        intro: translations['full'][language],
        title: translations['titles'][language]['full'],
        },
      ] : []),
    {
        element: '#prev',
        intro: translations['prev'][language],
        title: translations['titles'][language]['prev'],
      },
      {
        element: '#next',
        intro: translations['next'][language],
        title: translations['titles'][language]['next'],
      }
      
    ], 
    
    nextLabel:'>',
    prevLabel:'<',
    nextToDone: false,
    
  }).start();
  observeHelperLayer();
}
var player = GetPlayer();
var selectMultilanguage = player.GetVar('selectMultilanguage');

/* comments: 

1. You can update the language parameter in the function to match your preferred language, such as 'english', 'polish', 'russian', 'german', 'spanish', 'french', 'mandarin', or 'portuguese'.

*/
