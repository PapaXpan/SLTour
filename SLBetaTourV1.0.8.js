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
      russian: 'Здесь вы можете получить доступ к ресурсам, связанным с курсом. Выберите ссылку, чтобы получить доступ к этому ресурсу в новом окне.',
      polish: 'Tutaj możesz uzyskać dostęp do zasobów związanych z kursem. Wybierz łącze, aby uzyskać dostęp do tego zasobu w nowym oknie.',
      german: 'Hier können Sie auf Ressourcen zum Kurs zugreifen. Wählen Sie einen Link aus, um in einem neuen Fenster auf diese Ressource zuzugreifen.',
      spanish: 'Aquí puedes encontrar recursos útiles relacionados con el curso. Haz clic en los enlaces para acceder a materiales adicionales o referencias.',
      french: 'Ici, vous pouvez trouver des ressources utiles liées au cours. Cliquez sur les liens pour accéder à des matériaux supplémentaires ou des références.',
      mandarin: '在这里，您可以找到与课程相关的有用资源。点击链接访问额外的材料或参考资料。',
      portuguese: 'Aqui você pode encontrar recursos úteis relacionados ao curso. Clique nos links para acessar materiais adicionais ou referências.'
    },
    menu: {
      english: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      russian: 'Меню курса находится здесь. Он предоставляет обзор структуры курса и позволяет переходить к конкретным разделам или модулям.',
      polish: 'Menu kursu znajduje się tutaj. Zapewnia przegląd struktury kursu i umożliwia przejście do określonych sekcji lub modułów.',
      german: 'Das Gängemenü finden Sie hier. Es bietet einen Überblick über die Kursstruktur und ermöglicht den Sprung zu bestimmten Abschnitten oder Modulen.',
      spanish: 'El menú del curso se encuentra aquí. Proporciona una visión general de la estructura del curso y te permite saltar a secciones o módulos específicos.',
      french: 'Le menu du cours est situé ici. Il donne un aperçu de la structure du cours et vous permet de passer à des sections ou des modules spécifiques.',
      mandarin: '课程菜单位于此处。它提供了课程结构的概述，并允许您跳转到特定的部分或模块。',
      portuguese: 'O menu do curso está localizado aqui. Ele fornece uma visão geral da estrutura do curso e permite que você salte para seções ou módulos específicos.'
    },
    playback: {
      english: 'These controls allow you to play or pause the slide playback. You can control the pace of the course content based on your preferences.',
      russian: 'Эти элементы управления позволяют запускать или приостанавливать воспроизведение слайдов. Вы можете контролировать темп содержания курса в зависимости от своих предпочтений.',
      polish: 'Te elementy sterujące umożliwiają odtwarzanie lub wstrzymywanie odtwarzania slajdów. Możesz kontrolować tempo treści kursu w oparciu o swoje preferencje.',
      german: 'Mit diesen Steuerelementen können Sie die Folienwiedergabe starten oder anhalten. Sie können das Tempo der Kursinhalte nach Ihren Wünschen steuern.',
      spanish: 'Estos controles te permiten reproducir o pausar la reproducción de diapositivas. Puedes controlar el ritmo del contenido del curso según tus preferencias.',
      french: 'Ces commandes vous permettent de lire ou de mettre en pause la lecture des diapositives. Vous pouvez contrôler le rythme du contenu du cours en fonction de vos préférences.',
      mandarin: '这些控件允许您播放或暂停幻灯片播放。您可以根据自己的偏好控制课程内容的节奏。',
      portuguese: 'Esses controles permitem que você reproduza ou pause a reprodução dos slides. Você pode controlar o ritmo do conteúdo do curso com base em suas preferências.'
    },
    volume: {
      english: 'Change the intensity of sound in this course.',
      russian: 'Измените интенсивность звука в этом курсе.',
      polish: 'Zmień intensywność dźwięku w tym kursie.',
      german: 'Ändern Sie in diesem Kurs die Intensität des Tons.',
      spanish: 'Cambia la intensidad del sonido en este curso.',
      french: 'Changez l\'intensité du son dans ce cours.',
      mandarin: '改变本课程中的声音强度。',
      portuguese: 'Altere a intensidade do som neste curso.'
    },
     captions: {
      english: 'This button allows you to enable or disable captions for the course content.',
      russian: 'Эта кнопка позволяет включать или отключать субтитры к содержимому курса.',
      polish: 'Ten przycisk umożliwia włączenie lub wyłączenie napisów w treści kursu.',
      german: 'Mit dieser Schaltfläche können Sie Untertitel für den Kursinhalt aktivieren oder deaktivieren.',
      spanish: 'Este botón te permite habilitar o deshabilitar los subtítulos para el contenido del curso. Haz clic en él para activar o desactivar los subtítulos.',
      french: 'Ce bouton vous permet d\'activer ou de désactiver les sous-titres pour le contenu du cours. Cliquez dessus pour activer ou désactiver les sous-titres.',
      mandarin: '此按钮可让您启用或禁用课程内容的字幕。单击它以切换字幕的开启或关闭状态。',
      portuguese: 'Este botão permite que você habilite ou desabilite legendas para o conteúdo do curso. Clique nele para ativar ou desativar as legendas.'
    },
     speed: {
      english: 'To change the speed of a published course, simply click or tap the playback speed icon and choose any speed between 0.25x and 2x.',
      russian: 'Чтобы изменить скорость опубликованного курса, просто щелкните или коснитесь значка скорости воспроизведения и выберите любую скорость от 0,25x до 2x.',
      polish: 'Aby zmienić prędkość opublikowanego kursu, po prostu kliknij lub naciśnij ikonę prędkości odtwarzania i wybierz dowolną prędkość z zakresu od 0,25x do 2x.',
      german: 'Um die Geschwindigkeit eines veröffentlichten Kurses zu ändern, klicken oder tippen Sie einfach auf das Symbol für die Wiedergabegeschwindigkeit und wählen Sie eine beliebige Geschwindigkeit zwischen 0,25x und 2x.',
      spanish: 'Para cambiar la velocidad de un curso publicado, simplemente haga clic o toque el ícono de velocidad de reproducción y elija cualquier velocidad entre 0,25x y 2x.',
      french: 'Pour modifier la vitesse d\'un cours publié, cliquez ou appuyez simplement sur l\'icône de vitesse de lecture et choisissez n\'importe quelle vitesse entre 0,25x et 2x.',
      mandarin: '要更改已发布课程的速度，只需单击或点击播放速度图标并选择 0.25x 到 2x 之间的任意速度。',
      portuguese: 'Para alterar a velocidade de um curso publicado, basta clicar ou tocar no ícone de velocidade de reprodução e escolher qualquer velocidade entre 0,25x e 2x.'
    },
     settings: {
      english: 'Storyline 360 makes strides toward that customized experience with accessibility controls that allow learners to change the zoom mode, turn accessible text on or off, toggle keyboard shortcuts, and turn background audio on or off.',
      russian: 'Storyline 360 делает шаги в направлении такого индивидуального опыта с помощью элементов управления доступностью, которые позволяют учащимся изменять режим масштабирования, включать или выключать доступный текст, переключать сочетания клавиш и включать или выключать фоновый звук.',
      polish: 'Storyline 360 czyni postępy w kierunku spersonalizowanego doświadczenia dzięki kontrolom dostępności, które pozwalają uczniom zmieniać tryb powiększenia, włączać i wyłączać dostępny tekst, przełączać skróty klawiaturowe oraz włączać i wyłączać dźwięk w tle.',
      german: 'Storyline 360 macht Fortschritte in Richtung dieses individuellen Erlebnisses mit Eingabehilfen, mit denen Lernende den Zoommodus ändern, barrierefreien Text ein- oder ausschalten, Tastaturkürzel umschalten und Hintergrundaudio ein- oder ausschalten können.',
      spanish: 'Storyline 360 avanza hacia esa experiencia personalizada con controles de accesibilidad que permiten a los estudiantes cambiar el modo de zoom, activar o desactivar el texto accesible, alternar atajos de teclado y activar o desactivar el audio de fondo.',
      french: 'Storyline 360 progresse vers cette expérience personnalisée avec des commandes d\'accessibilité qui permettent aux apprenants de modifier le mode de zoom, d\'activer ou de désactiver le texte accessible, d\'activer ou de désactiver les raccourcis clavier et d\'activer ou de désactiver l\'audio d\'arrière-plan.',
      mandarin: 'Storyline 360 通过辅助功能控件向定制体验迈出了一大步，这些辅助功能控件允许学习者更改缩放模式、打开或关闭辅助文本、切换键盘快捷键以及打开或关闭背景音频。',
      portuguese: 'O Storyline 360 avança em direção a essa experiência personalizada com controles de acessibilidade que permitem aos alunos alterar o modo de zoom, ativar ou desativar o texto acessível, alternar atalhos de teclado e ativar ou desativar o áudio de fundo.'
    },
    full: {
      english: 'Experience the joy of complete immersion and elevate your digital encounters to new heights with Full Screen Mode.',
      russian: 'Испытайте радость полного погружения и поднимите свои цифровые встречи на новую высоту с помощью полноэкранного режима.',
      polish: 'Poczuj radość całkowitego zanurzenia się i przenieś swoje cyfrowe spotkania na nowy poziom dzięki trybowi pełnoekranowemu.',
      german: 'Erleben Sie die Freude am vollständigen Eintauchen und heben Sie Ihre digitalen Begegnungen mit dem Vollbildmodus auf ein neues Niveau.',
      spanish: 'Experimente la alegría de una inmersión completa y eleve sus encuentros digitales a nuevas alturas con el modo de pantalla completa.',
      french: 'Découvrez la joie d\'une immersion complète et élevez vos rencontres numériques vers de nouveaux sommets avec le mode plein écran.',
      mandarin: '体验完全沉浸的乐趣，并通过全屏模式将您的数字体验提升到新的高度。',
      portuguese: 'Experimente a alegria da imersão completa e eleve seus encontros digitais a novos patamares com o modo de tela inteira.'
    },
    next: {
      english: 'To move to the next slide, select the next button. If that button is not active, there is more to complete on the current slide.',
      russian: 'Чтобы перейти к следующему слайду, нажмите кнопку «Далее». Если эта кнопка неактивна, на текущем слайде есть что добавить.',
      polish: 'Aby przejść do następnego slajdu, wybierz przycisk Dalej. Jeśli ten przycisk nie jest aktywny, na bieżącym slajdzie jest więcej do zrobienia.',
      german: 'Um zur nächsten Folie zu wechseln, wählen Sie die Schaltfläche „Weiter“. Wenn diese Schaltfläche nicht aktiv ist, müssen auf der aktuellen Folie weitere Aufgaben erledigt werden.',
      spanish: 'Para pasar a la siguiente diapositiva, seleccione el botón siguiente. Si ese botón no está activo, hay más por completar en la diapositiva actual.',
      french: 'Pour passer à la diapositive suivante, cliquez sur le bouton "Suivant". Il vous conduira au sujet ou module suivant dans le cours.',
      mandarin: '要进入下一张幻灯片，请单击“下一页”按钮。它将带您进入课程中的下一个主题或模块。',
      portuguese: 'Para avançar para o próximo slide, clique no botão "Próximo". Ele o levará para o próximo tópico ou módulo no curso.'
    },
    prev: {
      english: 'If you want to return to the last slide, select the previous button.',
      russian: 'Если вы хотите вернуться к последнему слайду, нажмите кнопку «Предыдущий».',
      polish: 'Jeśli chcesz wrócić do ostatniego slajdu, wybierz przycisk poprzedni.',
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
        slide: 'Горка',
        resources: 'Полезные ресурсы',
        menu: 'Меню курса',
        playback: 'Управление воспроизведением слайдов',
        volume: 'Объем',
        captions: 'Подписим',
        speed: 'Скорость воспроизведения',
        settings: 'Настройки специальных возможностей',
        full: 'Полноэкранный режим',
        next: 'Кнопка следующего слайда',
        prev: 'Кнопка предыдущего слайда'
      },
      polish: {
        slide: 'Slajd',
        resources: 'Pomocne zasoby',
        menu: 'Menu kursu',
        playback: 'Sterowanie odtwarzaniem slajdów',
        volume: 'Tom',
        captions: 'Napisy',
        speed: 'Szybkość odtwarzania',
        settings: 'Ustawienia dostępności',
        full: 'Pełny ekran',
        next: 'Następny przycisk slajdu',
        prev: 'Poprzedni przycisk slajdu'
      },
      german: {
        slide: 'Gleiten',
        resources: 'Hilfreiche Ressourcen',
        menu: 'Kursmenü',
        playback: 'Steuerung der Folienwiedergabe',
        volume: 'Volumen',
        captions: 'Bildunterschriften',
        speed: 'Wiedergabegeschwindigkeit',
        settings: 'Barrierefreiheitseinstellungen',
        full: 'Vollbildmodus',
        next: 'Schaltfläche „Nächste Folie“.',
        prev: 'Schaltfläche „Vorheriger Schieberegler“.'
      },
      spanish: {
        slide: 'Diapositiva',
        resources: 'Recursos útiles',
        menu: 'Menú del curso',
        playback: 'Control de reproducción de diapositivas',
        volume: 'Volumen',
        captions: 'Subtítulos',
        speed: 'Velocidad de reproducción',
        settings: 'Configuración de accesibilidad',
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
        speed: 'Vitesse de lecture',
        settings: 'Paramètres d\'accessibilité',
        full: 'Entrer en mode plein écran',
        next: 'Bouton de diapositive suivante',
        prev: 'Bouton de diapositive précédente'
      },
      mandarin: {
        slide: '幻灯片',
        resources: '有用资源',
        menu: '课程菜单',
        playback: '幻灯片播放控制',
        volume: '体积',
        captions: '字幕',
        speed: '播放速度',
        settings: '辅助功能设置',
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
        captions: 'Legenda',
        speed: 'Velocidade de reprodução',
        settings: 'Configurações de acessibilidade',
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
     // Conditionally add the step only if introPrev is not true
      ...(player.GetVar('introPrev') !== true ? [
        {
        element: '#prev',
        intro: translations['prev'][language],
        title: translations['titles'][language]['prev'],
        },
      ] : []),
     // Conditionally add the step only if introNext is not true
      ...(player.GetVar('introNext') !== true ? [
        {
        element: '#next',
        intro: translations['next'][language],
        title: translations['titles'][language]['next'],
        },
      ] : [])
      
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
