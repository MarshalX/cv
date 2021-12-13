---
pdf_options:
  format: a4
  margin: 5mm 20mm 0mm 20mm
  printBackground: true
body_class: markdown-body
stylesheet:
  - https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css
  - https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
css: |-
  .page-break { page-break-after: always; }
  .markdown-body { font-size: 11px; }
  .markdown-body pre > code { white-space: pre-wrap; }
---

<center>
  <p class="text-center fs-1 mb-0">ILYA SIAMIONAU</p>
  <span class="mx-1">
    <img class="align-middle" src="simple-icons/icons/github.svg" height="16"/> 
    <a href="https://github.com/MarshalX">MarshalX</a>
  </span>
  <span class="mx-1">
    <img class="align-middle" src="simple-icons/icons/maildotru.svg" height="16"/> 
    <a href="mailto:ilya@marshal.dev">ilya@marshal.dev</a>
  </span>
  <span class="mx-1">
    <img class="align-middle" src="simple-icons/icons/linkedin.svg" height="16"/> 
    <a href="https://www.linkedin.com/in/marshalx/">MarshalX</a>
  </span>
</center>

<h2>SUMMARY</h2>

<p style="text-indent: 25px;">Software Engineer with 2+ years of strong experience in Backend Development in Python and JavaScript, practical experience in real-time communication (WebRTC) and Front-end Development in React + Redux, first-hand expertise in making C++ binding for Python.</p>

<h2>EXPERIENCE</h2>

<div class="row d-flex justify-content-between align-items-center">
  <div class="col text-start">
    <a href="https://abelanavr.com/" class="fs-6">Abelana VR</a>
    <span>as a backend developer</span>
  </div>
  <div class="col text-end">(Mar 2020 – Present)</div>
</div>

<ul>
  <li>Developed platform independent <a href="https://www.bluejeans.com/">BlueJeans</a> SDK in pure WebRTC with support of single and multi video streams, list of participants with handling of changed attributes, chat and meeting moderation tools.</li>
  <li>Leaded, designed and implemented integration with <a href="https://www.verizon.com/learning">Verizon Innovative Learning</a>. Worked with NCES ids of USA schools.</li>
  <li>Created custom subscriptions model for providing access to virtual reality apps.</li>
  <li>Actively participated in development the billing system by played time with support of many user`s devices.</li>
  <li>Conducted research about transferring data through sound (e.g. musical notes) to pare new VR headsets to accounts.</li>
</ul>


<div class="row d-flex justify-content-between align-items-center">
  <div class="col text-start">
    <a href="https://www.iridescent.studio/" class="fs-6">Iridescent Studio</a>
    <span>as a backend developer</span>
  </div>
  <div class="col text-end">(Mar 2020 – Present)</div>
</div>

<ul>
  <li>Developed backend part of new project in full Firebase stack (Firebase Cloud Function, Firestore, Firebase Storage). The project is aggregator of statistics of played games in Sudoku with giving achievements, making score histograms of all players, leaderboards.</li>
  <li>Designed database architecture for making fast aggregate calculations.</li>
  <li>Used in development InversifyJS as implementation of IoC paradigm. Also used tools for automatic generation Swagger specification from code of data models, controllers and routes with comment and examples of values.</li>
  <li>Developed client-team oriented tools: Bitbucket to Firebase Storage exporter, small bots in Slack.</li>
  <li>Conducted research about count of solution of Sudoku with modified game rules. Also designed game score calculation.</li>
</ul>


<div class="row d-flex justify-content-between align-items-center">
  <div class="col text-start">
    <a href="https://innowise-group.com/" class="fs-6">Innowise Group</a>
    <span>as a full-stack developer</span>
  </div>
  <div class="col text-end">(Aug 2019 – Mar 2020)</div>
</div>

<ul>
  <li>Implemented Jaccard index and Front-end for the system that according to the input param set (hard skills, for example) and can effectively combine people into optimal team and propose the best one for a project.</li>
</ul>

<h2>PERSONAL PROJECTS</h2>

<div class="d-flex align-items-center g-3">
  <a class="fs-6 me-1" href="https://github.com/MarshalX/tgcalls">Telegram Calls</a>
  <span>[C++, Python]</span>
</div>

<p class="mb-1" style="text-indent: 25px;">An open source Python library that provides ability to make common and group audio & video calls, live streams and broadcast recordings in Telegram.</p>
<ul>
  <li>Developed a binding using pybind11 that allows to use C++ library like Python native one.</li>
  <li>Restored CMake files for compile C++ library with big dependencies like WebRTC, FFmpeg, OpenSSL and Opus.</li>
  <li>Made Telegram's C++ library independent of graphical interfaces (made headless version of the official library).</li>
  <li>Implemented and documented high level Python interface by researched code of official clients in an env without doc.</li>
  <li>Built Python binary wheels for many platforms (maOS M1 & x86, Unix x86 & ARM, Win) using manylinux, CI and QEMU.</li>
  <li>Wrote realtime video and audio frames converter to raw formats using OpenCV and FFmpeg.</li>
  <li>Worked on synchronization of audio and video streams.</li>
</ul>


<div class="d-flex align-items-center g-3">
  <a class="fs-6 me-1" href="https://github.com/MarshalX/yandex-music-api">Yandex.Music API</a>
  <span>[Python]</span>
</div>

<p class="mb-1" style="text-indent: 25px;">An open source Python library with high level interfaces for the private Yandex.Music API with documentation, examples and tests.</p>

<h2>SKILLS</h2>

<div class="row">
  <div class="col-2 fw-bold">Languages</div>
  <div class="col-auto">
    <span class="fw-bold">Proficient: </span>
    <span>Python, JavaScript (TypeScript)</span>
    <br>
    <span class="fw-bold">Familiar: </span>
    <span>C++</span>
  </div>
</div>

<div class="row">
  <div class="col-2 fw-bold">Frameworks</div>
  <div class="col-auto">Django, Flask, FastAPI, Express</div>
</div>

<div class="row">
  <div class="col-2 fw-bold">Databases</div>
  <div class="col-auto">PostgreSQL, MySQL, MongoDB, Firestore</div>
</div>

<div class="row">
  <div class="col-2 fw-bold">Other</div>
  <div class="col-auto">WebRTC, Docker, CI/CD</div>
</div>
