(function () {
  'use strict';

  const screens = {
    splash: 'screen-splash',
    login: 'screen-login',
    home: 'screen-home',
    upload: 'screen-upload',
    analysis: 'screen-analysis',
    library: 'screen-library',
    reports: 'screen-reports',
    stats: 'screen-stats',
    profile: 'screen-profile',
    story: 'screen-story',
    activity: 'screen-activity'
  };

  let diseasesData = [];
  let currentDiseaseId = 'sickle';
  let librarySearchTerm = '';
  let openLibraryInDetail = false;

  const storyData = {
    'sickle': {
      title: 'مغامرة كريات الدم الشجاعة',
      blocks: [
        { type: 'text', content: '<strong>في عالم صغير جداً داخل جسمنا...</strong> توجد طرق سريعة وطويلة تشبه الأنابيب، تُسمى "الأوعية الدموية". في هذه الطرق، تعيش كائنات حمراء صغيرة ولطيفة اسمها <strong>"كريات الدم الحمراء"</strong>.' },
        { type: 'image', src: 'img/red_blood_cells_highway.png', caption: 'عائلة الكريات الدائرية تنقل الأكسجين بسعادة ومرح!' },
        { type: 'text', content: 'غالبية هذه الكريات شكلها دائري، وتتدحرج بسلاسة وسرعة. لكن بعض الكريات من أصدقائنا شكلهم مختلف قليلاً.. يشبهون <strong>"المنجل"</strong> أو <strong>"حبة الموز"</strong>!' },
        { type: 'text', content: 'بسبب شكلها المميز، عندما تحاول المرور في بعض الأنابيب الضيقة معاً، قد تتزاحم وتسبب "زحمة سير" صغيرة في طريق الدم!' },
        { type: 'image', src: 'img/sickle_cell_stuck.png', caption: 'الكريات الدائرية تساعد أصدقاءها الكريات المنجلية لعبور النفق بسلام' },
        { type: 'text', content: 'ولكن لا تقلق يا بطل! الكريات الدائرية دائماً تساعدهم لفتح الطريق. <strong>وهل تعرف كيف يمكننا نحن أيضاً أن نساعدهم كأبطال؟</strong>' },
        { type: 'list', items: ['<strong>شرب الكثير من الماء!</strong> 💧 تصبح طرق الدم مثل "الزلاقات المائية السريعة"، فتتزحلق فيها الكريات التي تشبه الموز بكل سهولة!', '<strong>الدفء السحري:</strong> الكريات تحب الأجواء الدافئة لكي تتحرك بسلاسة.'] },
        { type: 'image', src: 'img/water_slide_cells.png', caption: 'بفضل شربك للماء، أصبحت الأوعية الدموية مدينة ملاهي ممتعة للكريات المنجلية!' }
      ]
    },
    'thalassemia': {
      title: 'سر مصنع الطاقة الصغير',
      blocks: [
        { type: 'text', content: '<strong>عميقاً داخل عظامنا القوية...</strong> يوجد مصنع سحري صغير ولطيف. مهمة هذا المصنع هي صناعة سيارات حمراء صغيرة (كريات الدم) لكي تنقل الطاقة لكل أنحاء الجسم.' },
        { type: 'image', src: 'img/thalassemia_1.png', caption: 'المصنع السحري الصغير يصنع الكريات الحمراء' },
        { type: 'text', content: 'أحياناً، يكون هذا المصنع الصغير متعباً ولا يستطيع صنع سيارات قوية تكفي لحمل كل الطاقة، فتكون السيارات التي يصنعها صغيرة قليلاً.' },
        { type: 'text', content: 'لذلك، قد يشعر البطل الصغير ببعض التعب أو النعاس لأنه يحتاج إلى المزيد من سيارات الطاقة السريعة.' },
        { type: 'image', src: 'img/thalassemia_2.png', caption: 'الأصدقاء يحضرون طرود طاقة سحرية للمصنع' },
        { type: 'text', content: 'لكن لا مشكلة أبداً! الطبيب اللطيف يعرف السر، ويقوم بإعطاء الجسم <strong>"طرد طاقة سحري"</strong> (نقل الدم) مليء بالسيارات الحمراء القوية والجديدة.' },
        { type: 'list', items: ['بفضل طرود الطاقة، يستعيد البطل نشاطه ويلعب بقوة!', 'المصنع الصغير يرتاح قليلاً بينما تقوم السيارات الجديدة بعملها.'] }
      ]
    },
    'g6pd': {
      title: 'الدرع السحري وحبات الفول الشقية',
      blocks: [
        { type: 'text', content: 'في عالم الدم الجميل، تطفو الكريات الحمراء بسعادة ومرح. لدى معظم هذه الكريات <strong>درع سحري قوي غير مرئي</strong> لحمايتها من أي أشياء غريبة.' },
        { type: 'image', src: 'img/g6pd_1.png', caption: 'الكريات الحمراء السعيدة مع درعها اللامع' },
        { type: 'text', content: 'ولكن بعض أصدقائنا من الكريات لديهم درع <strong>رقيق جداً</strong> وناعم. هذا الدرع الرقيق لطيف جداً، ولكنه يكره بعض الأشياء، وأهمها... <strong>حبات الفول الشقية!</strong>' },
        { type: 'text', content: 'حبات الفول (وبعض الأدوية) قوية وتستطيع إحداث فرقعة صغيرة للدرع الرقيق.' },
        { type: 'image', src: 'img/g6pd_2.svg', caption: 'حبات الفول تفرقع الدرع، والكريات تبتعد بسرعة' },
        { type: 'text', content: 'لذلك، كل ما علينا فعله كأبطال خارقين هو:' },
        { type: 'list', items: ['الابتعاد عن أكل الفول اللذيذ واستبداله بأطعمة أخرى أكثر سحراً وفائدة.', 'سؤال الطبيب اللطيف قبل تناول أي دواء لنتأكد أنه صديق للدرع الرقيق.'] },
        { type: 'text', content: 'طالما ابتعدنا عن الفول الشقي، ستظل كرياتنا الحمراء تتراقص بسعادة داخلنا!' }
      ]
    },
    'alpha-thalassemia': {
      title: 'الأصدقاء الأربعة وفريق البناء',
      blocks: [
        { type: 'text', content: 'هل تعلم أن كل سيارة حمراء في جهازنا الدموي تحتاج إلى <strong>فريق من 4 عمال بناء صغار جداً</strong> كي يبنوها ويجعلوها قوية؟' },
        { type: 'image', src: 'img/alpha_1.svg', caption: 'فريق العمال يجهز السيارات لمهمة نقل طاقة الأكسجين' },
        { type: 'text', content: 'لدى أبطال (تلاسيميا ألفا)، يأخذ واحد أو اثنان من هؤلاء العمال "إجازة طويلة". لذلك، يقوم العمال الباقون بالعمل وحدهم لبناء السيارات.' },
        { type: 'text', content: 'السيارات التي يبنونها تكون أصغر قليلاً، لكنها مفيدة جداً. أحياناً قد لا نلاحظ أية فروق ونظل نلعب تماماً كباقي الأطفال!' },
        { type: 'text', content: 'أما إذا شعر البطل بقليل من الإرهاق، فالطبيب يساعده بفيتامينات لذيذة تجعل جسده مرتاحاً ودافئاً.' }
      ]
    },
    'cystic-fibrosis': {
      title: 'مغامرة هواء الرئتين المنعش',
      blocks: [
        { type: 'text', content: 'الرئتان في جسمنا تشبهان <strong>غابتين خضراوين مذهلتين</strong> ممتلئتين بأغصان تتنفس الهواء النقي. في الوضع الطبيعي، هناك طبقة ملساء وناعمة تنظف هذه الأغصان وتجعل الهواء يدخل ويخرج كالسحر.' },
        { type: 'image', src: 'img/cf_1.svg', caption: 'الأغصان حزينة بسبب الجيلي اللزج' },
        { type: 'text', content: 'لدى أصدقائنا في هذه الغابة، يصبح المنظف <strong>سميكاً وليزجاً جداً</strong> مثل "جيلي الفراولة"، مما يجعل بعض الهواء يعلق، ويسبب بعض السعال للتخلص منه.' },
        { type: 'text', content: 'ليكون بطلنا شجاعاً ويساعد غابته على التنفس، لديه أسلحة سرية:' },
        { type: 'list', items: ['<strong>دواء التبخير السحري:</strong> وهو هواء يذيب الجيلي ويجعله خفيفاً.', '<strong>الرياضة والقفز:</strong> حيث يعمل البطل كالرياح القوية التي تنفض الجيلي بعيداً.', '<strong>الضربات اللطيفة على الظهر:</strong> كالطبل الموسيقي لمساعدة الصدر.'] },
        { type: 'image', src: 'img/cf_2.svg', caption: 'الرياح السحرية تنظف الجيلي، وترسم ابتسامة على الرئتين!' },
        { type: 'text', content: 'بهذه القوى الخارقة، تظل غابة الرئتين خضراء ومليئة بالهواء المنعش والأصيل!' }
      ]
    }
  };

  async function loadDiseases() {
    try {
      const res = await fetch('data/diseases.json');
      const data = await res.json();
      diseasesData = data.diseases || [];
      renderLibraryDiseaseList();
      setLibraryView('list');
    } catch (error) {
      console.warn('Could not load diseases.json', error);
      diseasesData = [];
    }
  }

  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(function (el) {
      el.classList.remove('active');
      el.classList.remove('no-nav');
    });

    const target = document.getElementById(screens[screenId] || screenId);
    if (!target) return;

    target.classList.add('active');
    if (['splash', 'login', 'upload'].indexOf(screenId) !== -1) {
      target.classList.add('no-nav');
    }

    if (screenId === 'library') {
      if (openLibraryInDetail) {
        renderLibraryDetail(currentDiseaseId, 'overview');
        setLibraryView('detail');
      } else {
        renderLibraryDiseaseList(librarySearchTerm);
        setLibraryView('list');
      }
      openLibraryInDetail = false;
    }

    updateNavActive(screenId);
  }

  function updateNavActive(screenId) {
    document.querySelectorAll('.bottom-nav .nav-item').forEach(function (item) {
      const nav = item.getAttribute('data-nav');
      item.classList.toggle('active', nav === screenId);
    });
  }

  function navigateTo(screenId) {
    showScreen(screenId);
  }

  function initSplash() {
    setTimeout(function () {
      showScreen('login');
    }, 2200);
  }

  function initLogin() {
    const loginFormBtn = document.querySelector('[data-action="show-login-form"]');
    const registerFormBtn = document.querySelector('[data-action="show-register-form"]');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginFormBtn && loginForm && registerForm) {
      loginFormBtn.addEventListener('click', function () {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
      });
    }

    if (registerFormBtn && loginForm && registerForm) {
      registerFormBtn.addEventListener('click', function () {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
      });
    }
  }

  function initNavigation() {
    document.body.addEventListener('click', function (event) {
      const direct = event.target.closest('[data-navigate]');
      if (direct) {
        event.preventDefault();
        const screenId = direct.getAttribute('data-navigate');
        const diseaseId = direct.getAttribute('data-disease');

        if (screenId === 'library') {
          openLibraryInDetail = Boolean(diseaseId);
        }

        if (diseaseId) {
          currentDiseaseId = diseaseId;
        }

        if (screenId === 'story') {
          renderStoryDetail(currentDiseaseId);
        }
        if (screenId === 'activity') {
          renderActivityDetail(currentDiseaseId);
        }

        navigateTo(screenId);
        return;
      }

      const navItem = event.target.closest('.nav-item[data-nav]');
      if (navItem) {
        event.preventDefault();
        const navTarget = navItem.getAttribute('data-nav');
        if (navTarget === 'library') {
          openLibraryInDetail = false;
        }
        navigateTo(navTarget);
      }
    });
  }

  function initUpload() {
    const zone = document.getElementById('upload-zone');
    const input = document.getElementById('report-file');
    const loadingArea = document.getElementById('upload-loading-area');
    const loadingText = document.getElementById('upload-loading-text');

    if (!zone || !input || !loadingArea) return;

    async function handleFileUpload() {
      const file = input.files[0];
      if (!file) return;

      zone.style.display = 'none';
      loadingArea.style.display = 'block';
      loadingText.textContent = "جاري فحص المستند...";

      const oldErr = document.getElementById('upload-err-msg');
      if (oldErr) oldErr.remove();

      try {
        if (!file.type.startsWith('image/')) {
          throw new Error('يرجى رفع صورة (JPG, PNG)');
        }

        loadingText.textContent = "جاري قراءة البيانات بالذكاء الاصطناعي... 🤖";

        const result = await Tesseract.recognize(
          file,
          'eng',
          {
            logger: m => {
              if (m.status === 'recognizing text') {
                loadingText.textContent = `جاري التحليل... ${Math.round(m.progress * 100)}%`;
              }
            }
          }
        );

        const text = result.data.text.toLowerCase();
        
        const keywords = ['sickle', 'blood', 'haemoglobin', 'result', 'test name', 'glucose', 'hba1c', 'lymphocytes', 'negative', 'positive', 'wbc'];
        let matches = 0;
        keywords.forEach(kw => {
          if (text.includes(kw)) matches++;
        });

        if (matches >= 2) {
          loadingText.textContent = "تقرير معتمد! جاري استخراج النتائج النهائية...";
          
          setTimeout(() => {
            navigateTo('analysis');
            zone.style.display = 'flex';
            loadingArea.style.display = 'none';
            loadingText.textContent = "جاري استخراج البيانات...";
            
            const reportsContainer = document.getElementById('reports-container');
            if (reportsContainer) {
              reportsContainer.innerHTML = '<div class="card" style="border: 2px solid #2dd4bf;"><h3 style="color: #0f766e; margin-bottom: 5px;">تقرير فحص معتمد - حديث</h3><p>تم التحليل بنجاح بواسطة أمان الذكي</p><button class="btn btn-primary" style="margin-top: 15px;" data-navigate="analysis">الاطلاع على النتيجة</button></div>';
              initNavigation(); 
            }
            input.value = ''; // reset input
          }, 1500);

        } else {
          throw new Error('الملف ليس تقريراً طبياً معتمداً');
        }

      } catch (err) {
        console.error(err);
        loadingArea.style.display = 'none';
        zone.style.display = 'flex';
        
        const errMsg = document.createElement('div');
        errMsg.id = 'upload-err-msg';
        errMsg.style.backgroundColor = '#fef2f2';
        errMsg.style.color = '#dc2626';
        errMsg.style.padding = '10px';
        errMsg.style.borderRadius = '8px';
        errMsg.style.marginTop = '15px';
        errMsg.style.fontWeight = 'bold';
        errMsg.style.textAlign = 'center';
        errMsg.innerHTML = `⚠️ ${err.message === 'الملف ليس تقريراً طبياً معتمداً' ? 'عذراً، لم يتطابق الملف مع أي تقرير طبي معتمد.' : 'نرجو رفع صورة واضحة للتقرير الطبي.'}`;
        zone.parentElement.appendChild(errMsg);
        input.value = '';
      }
    }

    zone.addEventListener('click', function () {
      input.click();
    });

    input.addEventListener('change', function () {
      if (input.files && input.files.length > 0) {
        handleFileUpload();
      }
    });

    zone.addEventListener('dragover', function (event) {
      event.preventDefault();
      zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', function () {
      zone.classList.remove('dragover');
    });

    zone.addEventListener('drop', function (event) {
      event.preventDefault();
      zone.classList.remove('dragover');
      if (event.dataTransfer.files.length > 0) {
        input.files = event.dataTransfer.files;
        handleFileUpload();
      }
    });
  }

  function setLibraryView(view) {
    const listView = document.getElementById('library-list-view');
    const detailView = document.getElementById('library-detail-view');
    if (!listView || !detailView) return;

    if (view === 'detail') {
      listView.classList.add('hidden');
      detailView.classList.remove('hidden');
    } else {
      detailView.classList.add('hidden');
      listView.classList.remove('hidden');
    }
  }

  function resetLibraryTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(function (item) {
      item.classList.remove('active');
    });
    if (tabs[0]) {
      tabs[0].classList.add('active');
    }
  }

  function initLibraryTabs() {
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.tab-btn').forEach(function (item) {
          item.classList.remove('active');
        });
        btn.classList.add('active');
        renderLibraryDetail(currentDiseaseId, btn.getAttribute('data-tab'));
      });
    });

    const backBtn = document.getElementById('library-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', function () {
        setLibraryView('list');
      });
    }
  }

  function initLibrarySearch() {
    const searchInput = document.getElementById('library-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
      librarySearchTerm = searchInput.value.trim().toLowerCase();
      renderLibraryDiseaseList(librarySearchTerm);
    });
  }

  function getDisease(id) {
    return diseasesData.find(function (disease) {
      return disease.id === id;
    }) || diseasesData[0] || null;
  }

  function makeExcerpt(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }

  function splitPoints(text) {
    if (!text) return [];
    return text
      .split(/[،,؛.]/)
      .map(function (item) { return item.trim(); })
      .filter(function (item) { return item.length > 0; });
  }

  function renderLibraryDiseaseList(filterTerm) {
    const container = document.getElementById('library-disease-list');
    if (!container) return;

    const query = (filterTerm || '').toLowerCase();
    const filtered = diseasesData.filter(function (disease) {
      const nameAr = (disease.nameAr || '').toLowerCase();
      const nameEn = (disease.nameEn || '').toLowerCase();
      return !query || nameAr.indexOf(query) !== -1 || nameEn.indexOf(query) !== -1;
    });

    if (!filtered.length) {
      container.innerHTML = '<div class="card"><p class="info-text">لا توجد نتائج مطابقة.</p></div>';
      return;
    }

    container.innerHTML = filtered.map(function (disease) {
      return (
        '<a href="#" class="disease-card" data-disease-id="' + disease.id + '">' +
          (disease.imageUrl ? '<img src="' + disease.imageUrl + '" alt="' + (disease.nameAr || '') + '">' : '') +
          '<div class="disease-card-body">' +
            '<strong>' + (disease.nameAr || '') + '</strong>' +
            '<p>' + makeExcerpt(disease.overview || '', 110) + '</p>' +
            '<span class="disease-card-link">تعلم المزيد</span>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    container.querySelectorAll('.disease-card').forEach(function (card) {
      card.addEventListener('click', function (event) {
        event.preventDefault();
        currentDiseaseId = card.getAttribute('data-disease-id');
        resetLibraryTabs();
        renderLibraryDetail(currentDiseaseId, 'overview');
        setLibraryView('detail');
      });
    });
  }

  function renderLibraryDetail(id, activeTab) {
    const disease = getDisease(id);
    const content = document.getElementById('library-content');
    if (!disease || !content) return;

    const currentTab = activeTab || (document.querySelector('.tab-btn.active') && document.querySelector('.tab-btn.active').getAttribute('data-tab')) || 'overview';
    const symptomPoints = splitPoints(disease.symptoms || '');
    const actionPoints = splitPoints(disease.actions || '');

    const symptomCards = symptomPoints.map(function (point, index) {
      const icon = index % 3 === 0
        ? 'https://files.svgcdn.io/heroicons/bolt-20-solid.svg'
        : index % 3 === 1
          ? 'https://files.svgcdn.io/heroicons/face-frown-20-solid.svg'
          : 'https://files.svgcdn.io/heroicons/exclamation-triangle-20-solid.svg';
      const tone = index === symptomPoints.length - 1 ? ' risk' : '';
      return (
        '<div class="detail-row-card' + tone + '">' +
          '<span class="detail-row-icon"><img src="' + icon + '" alt=""></span>' +
          '<div><strong>' + point + '</strong></div>' +
        '</div>'
      );
    }).join('');

    const actionCards = actionPoints.map(function (point, index) {
      const icon = index % 3 === 0
        ? 'https://files.svgcdn.io/heroicons/cake-20-solid.svg'
        : index % 3 === 1
          ? 'https://files.svgcdn.io/heroicons/wrench-screwdriver-20-solid.svg'
          : 'https://files.svgcdn.io/heroicons/shield-check-20-solid.svg';
      return (
        '<div class="detail-row-card">' +
          '<span class="detail-row-icon action"><img src="' + icon + '" alt=""></span>' +
          '<div><strong>' + point + '</strong></div>' +
        '</div>'
      );
    }).join('');

    const sections = {
      overview:
        '<div class="section detail-block">' +
          '<h4>ما هو؟</h4>' +
          '<div class="section-card"><p>' + (disease.overview || '') + '</p></div>' +
        '</div>',
      inheritance:
        '<div class="section detail-block">' +
          '<h4>كيف يتم توريثه؟</h4>' +
          '<div class="inheritance-card">' +
            '<p>' + (disease.inheritance || '') + '</p>' +
            '<div class="inheritance-icons">' +
              '<div class="inherit-item"><img src="https://files.svgcdn.io/heroicons/user-20-solid.svg" alt=""><span>الأب حامل</span></div>' +
              '<div class="inherit-item"><img src="https://files.svgcdn.io/heroicons/user-20-solid.svg" alt=""><span>الأم حامل</span></div>' +
            '</div>' +
            '<div class="inheritance-prob">' +
              '<div class="prob-dot affected"><span>25%</span><small>مصاب</small></div>' +
              '<div class="prob-dot carrier"><span>25%</span><small>حامل</small></div>' +
              '<div class="prob-dot carrier"><span>25%</span><small>حامل</small></div>' +
              '<div class="prob-dot healthy"><span>25%</span><small>سليم</small></div>' +
            '</div>' +
          '</div>' +
        '</div>',
      symptoms:
        '<div class="section detail-block">' +
          '<h4>الأعراض الشائعة</h4>' +
          '<div class="detail-stack">' + (symptomCards || '<div class="section-card"><p>لا توجد بيانات.</p></div>') + '</div>' +
        '</div>',
      actions:
        '<div class="section detail-block">' +
          '<h4>الإجراءات</h4>' +
          '<div class="detail-stack">' + (actionCards || '<div class="section-card"><p>لا توجد بيانات.</p></div>') + '</div>' +
        '</div>'
    };

    content.innerHTML =
      '<div class="library-disease-detail">' +
        '<div class="disease-hero-card">' +
          (disease.imageUrl ? '<img class="disease-image" src="' + disease.imageUrl + '" alt="' + (disease.nameAr || '') + '">' : '') +
          '<h2>' + (disease.nameAr || '') + '</h2>' +
        '</div>' +
        (sections[currentTab] || sections.overview) +
        '<div class="section detail-block">' +
          '<h4>محتوى تعليمي للطفل</h4>' +
          '<div class="child-content-grid">' +
            (storyData[disease.id] 
             ? '<article class="child-card" data-navigate="story">' +
                 '<img src="' + storyData[disease.id].blocks.find(b => b.type === 'image').src + '" alt="قصة تعليمية" style="object-fit: cover; border-radius: 8px;">' +
                 '<p style="font-weight: bold; margin-top: 10px;">قصة قصيرة: ' + storyData[disease.id].title + '</p>' +
               '</article>'
             : '<article class="child-card">' +
                 '<img src="img/Gemini_Generated_Image_hh0xtghh0xtghh0x.png" alt="قصة تعليمية">' +
                 '<p>قصة قصيرة تشرح المرض للطفل بطريقة مبسطة.</p>' +
               '</article>') +
            '<article class="child-card" data-navigate="activity" style="cursor: pointer;">' +
              (disease.id === 'sickle' ? '<img src="img/activity_sickle.svg" alt="لعبة شرب الماء" style="object-fit: cover; border-radius: 8px;">' + '<p style="font-weight: bold; margin-top: 10px;">لعبة شرب الماء</p>' :
               disease.id === 'thalassemia' ? '<img src="img/activity_thalassemia.svg" alt="شحن الطاقة" style="object-fit: cover; border-radius: 8px;">' + '<p style="font-weight: bold; margin-top: 10px;">لعبة شحن الطاقة</p>' :
               disease.id === 'g6pd' ? '<img src="img/activity_g6pd.svg" alt="تحدي الدرع السحري" style="object-fit: cover; border-radius: 8px;">' + '<p style="font-weight: bold; margin-top: 10px;">تحدي الدرع السحري</p>' :
               disease.id === 'alpha-thalassemia' ? '<img src="img/activity_alpha.svg" alt="أكمل البناء" style="object-fit: cover; border-radius: 8px;">' + '<p style="font-weight: bold; margin-top: 10px;">لعبة فريق البناء</p>' :
               disease.id === 'cystic-fibrosis' ? '<img src="img/activity_cf.svg" alt="تنظيف الرئتين" style="object-fit: cover; border-radius: 8px;">' + '<p style="font-weight: bold; margin-top: 10px;">تحدي تنظيف الرئتين</p>' :
               '<img src="img/Gemini_Generated_Image_u5dpxu5dpxu5dpxu.png" alt="لعبة تعليمية"><p>نشاط تفاعلي يساعد الطفل على الفهم والوقاية.</p>') +
            '</article>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderStoryDetail(diseaseId) {
    const story = storyData[diseaseId];
    if (!story) return;

    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');
    
    if (titleEl) titleEl.textContent = story.title;
    if (contentEl) {
      let html = '';
      story.blocks.forEach(function(block) {
        if (block.type === 'text') {
          html += '<p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">' + block.content + '</p>';
        } else if (block.type === 'image') {
          html += '<div style="text-align: center; margin-bottom: 25px;">' +
                    '<img src="' + block.src + '" alt="" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">' +
                    '<p style="font-size: 0.9rem; color: #6b7280; margin-top: 8px;">' + (block.caption || '') + '</p>' +
                  '</div>';
        } else if (block.type === 'list') {
          html += '<ul style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 25px; padding-right: 20px; list-style-type: decimal;">';
          block.items.forEach(function(item) {
            html += '<li style="margin-bottom: 8px;">' + item + '</li>';
          });
          html += '</ul>';
        }
      });
      contentEl.innerHTML = html;
    }
  }

  function renderActivityDetail(diseaseId) {
    const container = document.getElementById('activity-content');
    const title = document.getElementById('activity-title');
    if (!container) return;

    container.innerHTML = '';
    let html = '';

    if (diseaseId === 'sickle') {
      container.style.background = 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)';
      container.style.borderRadius = '15px';
      title.textContent = 'لعبة شرب الماء';
      html = `
        <h3>ساعد الكرية المنجلية!</h3>
        <p>الكرية البيضاوية عالقة! اشرب الماء 3 مرات لتجعل الممر واسعاً.</p>
        <div id="sickle-tunnel" style="width: 50px; height: 150px; background: #fca5a5; margin: 20px auto; border-radius: 10px; transition: width 0.5s; display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <div id="sickle-cell" style="font-size: 30px; transition: transform 0.5s;">🍌</div>
        </div>
        <button class="btn btn-primary" id="sickle-btn">شرب الماء 💧</button>
        <p id="sickle-msg" style="margin-top: 15px; font-weight: bold; color: #16a34a;"></p>
      `;
      container.innerHTML = html;
      
      let clicks = 0;
      document.getElementById('sickle-btn').onclick = function() {
        if (clicks >= 3) return;
        clicks++;
        const tunnel = document.getElementById('sickle-tunnel');
        tunnel.style.width = (50 + clicks * 30) + 'px';
        if (clicks === 3) {
          document.getElementById('sickle-cell').style.transform = 'translateY(150px)';
          document.getElementById('sickle-msg').textContent = 'أحسنت! الماء يجعل طرق الدم واسعة وسهلة!';
        }
      };
    } else if (diseaseId === 'thalassemia') {
      container.style.background = 'linear-gradient(135deg, #fef9c3 0%, #fde047 100%)';
      container.style.borderRadius = '15px';
      title.textContent = 'شحن الطاقة';
      html = `
        <h3>مصنع الطاقة متعب</h3>
        <p>انقر على قطرات الدم السحرية لملء شحن المصنع!</p>
        <div style="width: 80%; height: 30px; background: #e5e7eb; border-radius: 15px; margin: 20px auto; overflow: hidden;">
          <div id="thal-bar" style="width: 0%; height: 100%; background: #ef4444; transition: width 0.3s;"></div>
        </div>
        <div id="thal-drops" style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
        </div>
        <p id="thal-msg" style="margin-top: 15px; font-weight: bold; color: #16a34a;"></p>
      `;
      container.innerHTML = html;
      
      const dropsContainer = document.getElementById('thal-drops');
      let energy = 0;
      for (let i = 0; i < 5; i++) {
        const drop = document.createElement('div');
        drop.textContent = '🩸';
        drop.style.fontSize = '40px';
        drop.style.cursor = 'pointer';
        drop.style.transition = 'opacity 0.2s';
        drop.onclick = function() {
          if (drop.style.opacity === '0') return;
          drop.style.opacity = '0';
          energy += 20;
          document.getElementById('thal-bar').style.width = energy + '%';
          if (energy >= 100) {
            document.getElementById('thal-msg').textContent = 'طاقة كاملة! شكراً للأبطال المتبرعين!';
          }
        };
        dropsContainer.appendChild(drop);
      }
    } else if (diseaseId === 'g6pd') {
      container.style.background = 'linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)';
      container.style.borderRadius = '15px';
      title.textContent = 'تحدي الدرع السحري';
      html = `
        <h3>اختر الطعام الصحي</h3>
        <p>اجمع التفاح وابتعد تماماً عن الفول لتحافظ على درعك!</p>
        <div style="font-size: 50px; margin: 10px;">🛡️ <span id="g6pd-score">0</span></div>
        <div id="g6pd-items" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
        </div>
        <p id="g6pd-msg" style="margin-top: 15px; font-weight: bold;"></p>
      `;
      container.innerHTML = html;
      
      const itemsContainer = document.getElementById('g6pd-items');
      const items = ['🍎', '🫘', '🍎', '🫘', '🍎'];
      let score = 0;
      items.forEach(function(item) {
        const el = document.createElement('div');
        el.textContent = item;
        el.style.fontSize = '50px';
        el.style.cursor = 'pointer';
        el.style.transition = 'opacity 0.2s, transform 0.1s';
        el.onclick = function() {
          if (el.style.opacity === '0') return;
          if (item === '🍎') {
            score++;
            document.getElementById('g6pd-score').textContent = score;
            el.style.opacity = '0';
            if (score === 3) {
              document.getElementById('g6pd-msg').textContent = 'ممتاز! الدرع قوي وأنت بأمان.';
              document.getElementById('g6pd-msg').style.color = '#16a34a';
            }
          } else {
            document.getElementById('g6pd-msg').textContent = 'احذر! الفول قد يكسر الدرع!';
            document.getElementById('g6pd-msg').style.color = '#dc2626';
            el.style.transform = 'rotate(20deg)';
            setTimeout(() => el.style.transform = 'rotate(-20deg)', 100);
            setTimeout(() => el.style.transform = 'none', 200);
          }
        };
        itemsContainer.appendChild(el);
      });
    } else if (diseaseId === 'alpha-thalassemia') {
      container.style.background = 'linear-gradient(135deg, #ffedd5 0%, #fdba74 100%)';
      container.style.borderRadius = '15px';
      title.textContent = 'أكمل البناء';
      html = `
        <h3>أعطهم الأدوات</h3>
        <p>العمال ينقصهم بعض الأدوات. انقر على الأدوات لتوصيلها إليهم.</p>
        <div style="font-size: 60px; margin: 20px;">👷‍♂️ 👷‍♂️ 👷‍♂️</div>
        <div id="alpha-tools" style="display: flex; gap: 20px; justify-content: center;">
          <div class="tool" style="font-size: 40px; cursor: pointer; transition: opacity 0.3s;">🔧</div>
          <div class="tool" style="font-size: 40px; cursor: pointer; transition: opacity 0.3s;">🔨</div>
          <div class="tool" style="font-size: 40px; cursor: pointer; transition: opacity 0.3s;">⚙️</div>
        </div>
        <div id="alpha-car" style="font-size: 80px; margin-top: 20px; opacity: 0.3; transition: opacity 0.5s;">🚗</div>
        <p id="alpha-msg" style="margin-top: 15px; font-weight: bold; color: #16a34a;"></p>
      `;
      container.innerHTML = html;
      
      let toolsGiven = 0;
      document.querySelectorAll('#alpha-tools .tool').forEach(function(tool) {
        tool.onclick = function() {
          if (tool.style.opacity === '0') return;
          tool.style.opacity = '0';
          toolsGiven++;
          document.getElementById('alpha-car').style.opacity = (0.3 + toolsGiven * 0.23).toString();
          if (toolsGiven === 3) {
            document.getElementById('alpha-car').style.opacity = '1';
            document.getElementById('alpha-msg').textContent = 'تم بناء السيارة بنجاح وصارت جاهزة للعمل!';
          }
        };
      });
    } else if (diseaseId === 'cystic-fibrosis') {
      container.style.background = 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)';
      container.style.borderRadius = '15px';
      title.textContent = 'تنظيف الرئتين';
      html = `
        <h3>انفخ بقوة!</h3>
        <p>اضغط على الزر 5 مرات وكأنك تتنفس بشدة وتقفز لتطير الجيلي اللزج!</p>
        <div id="cf-lung" style="font-size: 80px; filter: grayscale(100%) sepia(50%) hue-rotate(250deg); transition: filter 0.5s; margin: 20px;">🫁</div>
        <button class="btn btn-primary" id="cf-btn">انفخ وتحرك! 💨</button>
        <p id="cf-msg" style="margin-top: 15px; font-weight: bold; color: #16a34a;"></p>
      `;
      container.innerHTML = html;
      
      let blows = 0;
      document.getElementById('cf-btn').onclick = function() {
        if (blows >= 5) return;
        blows++;
        const lung = document.getElementById('cf-lung');
        const currentGray = 100 - (blows * 20);
        lung.style.filter = 'grayscale(' + currentGray + '%) sepia(' + (currentGray/2) + '%) hue-rotate(250deg)';
        if (blows === 5) {
          lung.style.filter = 'none';
          document.getElementById('cf-msg').textContent = 'رائعتان! الرئتان تنظفان وتتنفسان بسهولة الآن.';
        }
      };
    } else {
      container.style.background = '';
      title.textContent = 'النشاط التفاعلي';
      container.innerHTML = '<p class="info-text">النشاط قيد الإعداد...</p>';
    }
  }

  function init() {
    initSplash();
    initLogin();
    initNavigation();
    initUpload();
    initLibraryTabs();
    initLibrarySearch();
    loadDiseases();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
