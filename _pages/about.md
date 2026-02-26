---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>



My name is Qian Qiao (乔谦). I am currently a researcher at Soul AILab. I received M.Sc. and B.Eng. from Soochow University, advised by Professors [Fanzhang Li](https://scst.suda.edu.cn/0e/e0/c11250a528096/page.htm). My previous research focused on multimodal understanding, image generation, text spotting, and few-shot learning. Additionally, I have four years of experience in blockchain technology and investment. 

**Currently, I also lead a research team, focus on: diffusion language models, real-time video generation, and multimodal models. And I am actively seeking collaborators in these fields!**

**Feel free to reach me at joeqian@aliyun.com or on WeChat (ID: Joeqqqqqqqq).**

# 🔥 News
- *2026.02*: 🎉 🔥🔥🔥 We have open-sourced another audio-driven real-time streaming digital human project: the model **SoulX-FlashHead** (trained on the [**VividHead**](https://huggingface.co/datasets/Soul-AILab/VividHead) dataset) ([GitHub](https://github.com/Soul-AILab/SoulX-FlashHead), [Hugging Face](https://huggingface.co/Soul-AILab/SoulX-FlashHead-1_3B)), currently **ranked #1** on Hugging Face in the image-to-video category. Welcome to check it out!
- *2026.02*: 🎉 `TextFlux: An OCR-Free DiT Model for High-Fidelity Multilingual Scene Text Synthesis` is accepted by EUROGRAPHICS 2026.
- *2026.01*: 🎉 `Large Language Model Compression with Global Rank and Sparsity Optimization` is accepted by ICLR 2026.
- *2025.12*: 🎉 🔥🔥🔥 We open-sourced audio-driven real-time streaming digital human projects: **SoulX-FlashTalk** ([GitHub](https://github.com/Soul-AILab/SoulX-FlashTalk), [Hugging Face](https://huggingface.co/Soul-AILab/SoulX-FlashTalk-14B)), which has received **widespread attention** on Hugging Face's image-to-video projects; the GitHub repo has reached **1k+ stars**.
- *2025.12*: 🎉 Invited by ICME as AC.
- *2025.01*: 🎉 `QPruner:ProbabilisticDecision Quantization for StructuredPruning in Large Language Models` is accepted by NAACL 2025.
- *2024.12*: 🎉 `AIM: Let Any Multimodal Large Language Models Embrace Efficient In-Context Learning` is accepted by AAAI 2024.
- *2024.11*: 🎉 Invited by CogSci, ICME and IJCNN as Reviewer.
- *2024.10*: 🎉 🔥🔥🔥 I honoured the national scholarship.
- *2024.07*: 🎉 Invited by AAAI as Reviewer.
- *2024.08*: 🎉 One paper is accepted by PRICAI 2024.
- *2024.07*: 🎉 🔥🔥🔥 `DNTextSpotter: Arbitrary-Shaped Scene Text Spotting via Improved Denoising Training` is accepted by ACM MM 2024.
- *2024.07*: 🎉 Invited by EMNLP as Reviewer.
- *2024.06*: 🎉 Two papers are accepted by ICANN 2024.
- *2024.06*: 🎉 Two papers are submitted to EMNLP 2024 as co-author.
- *2024.05*: 🎉 Invited by NeurIPS as Reviewer.
- *2024.04*: 🎉 Attending ICASSP2024 in Seoul, South Korea.
- *2024.04*: 🎉 Two papers are accepted by ICME 2024.
- *2024.03*: 🎉 Invited by MM as Program Reviewer.


# 📝 Publications 
<!-- 风格: 右边：pipeline/可视化图，右边上下排列：title，作者， 会议/期刊名，(arxiv,)-->
<!-- 2026出版的 -->

<!-- SoulX-FlashHead: 图片占位 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Technical Report</div><img src='images/paper/flashhead.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- SoulX-FlashHead: Oracle-Guided Real-Time Streaming Talking Head,

  <!-- Soul AILab. Trained on the VividHead dataset. -->

  *Soul AILab, 2026.*

  [**[arxiv]**](https://arxiv.org/abs/2602.07449) [**[GitHub]**](https://github.com/Soul-AILab/SoulX-FlashHead) [**[Hugging Face]**](https://huggingface.co/Soul-AILab/SoulX-FlashHead-1_3B) [**[VividHead Dataset]**](https://huggingface.co/datasets/Soul-AILab/VividHead) [![GitHub](https://img.shields.io/github/stars/Soul-AILab/SoulX-FlashHead.svg?style=social&amp;label=Official)](https://github.com/Soul-AILab/SoulX-FlashHead) [![Arxiv](https://img.shields.io/badge/arXiv-2602.07449-B31B1B?style=flat-square)](https://arxiv.org/abs/2602.07449) [![HuggingFace](https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-FFD21E?style=flat-square)](https://huggingface.co/Soul-AILab/SoulX-FlashHead-1_3B)

</div>
</div>

<!-- SoulX-FlashTalk: 图片占位 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Technical Report</div><img src='images/paper/flashtalk.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- SoulX-FlashTalk: Audio-Driven Real-Time Streaming Digital Human,

  <!-- Soul AILab -->

  *Soul AILab, 2026.*

  [**[arxiv]**](https://arxiv.org/abs/2512.23379) [**[GitHub]**](https://github.com/Soul-AILab/SoulX-FlashTalk) [**[Hugging Face]**](https://huggingface.co/Soul-AILab/SoulX-FlashTalk-14B) [![GitHub](https://img.shields.io/github/stars/Soul-AILab/SoulX-FlashTalk.svg?style=social&amp;label=Official)](https://github.com/Soul-AILab/SoulX-FlashTalk) [![Arxiv](https://img.shields.io/badge/arXiv-2512.23379-B31B1B?style=flat-square)](https://arxiv.org/abs/2512.23379) [![HuggingFace](https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-FFD21E?style=flat-square)](https://huggingface.co/Soul-AILab/SoulX-FlashTalk-14B)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EuroGraphics 2026</div><img src='images/paper/textflux.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- TextFlux: An OCR-Free DiT Model for High-Fidelity Multilingual Scene Text Synthesis,

  <!-- Yu Xie, Jielei Zhang, **Qian Qiao**$$^\#$$, Zhouhui Lian -->

  *EuroGraphics, 2026.*

  [**[arxiv]**](https://arxiv.org/abs/2505.17778) [**[code]**](https://github.com/yyyyyxie/textflux) [**[project]**](https://yyyyyxie.github.io/textflux-site/) [![GitHub](https://img.shields.io/github/stars/yyyyyxie/textflux.svg?style=social&amp;label=Official)](https://github.com/yyyyyxie/textflux) [![Citations](https://img.shields.io/badge/Citations-7-007EC6?style=flat-square)](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TextFlux%3A+An+OCR-Free+DiT+Model+for+High-Fidelity+Multilingual+Scene+Text+Synthesis&btnG=)
  [![Arxiv](https://img.shields.io/badge/arXiv-2505.17778-B31B1B?style=flat-square)](https://arxiv.org/abs/2505.17778) [![HuggingFace](https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-FFD21E?style=flat-square)](https://huggingface.co/yyyyyxie/textflux)


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/paper/cap.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Large Language Model Compression with Global Rank and Sparsity Optimization,

  <!-- -->

  *ICLR, 2026.*

  [**[arxiv]**](https://arxiv.org/abs/2505.03801) [![Citations](https://img.shields.io/badge/Citations-4-007EC6?style=flat-square)](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Large+Language+Model+Compression+with+Global+Rank+and+Sparsity+Optimization&btnG=) [![Arxiv](https://img.shields.io/badge/arXiv-2505.03801-B31B1B?style=flat-square)](https://arxiv.org/abs/2505.03801)

</div>
</div>

<!-- tradiff 希望cvpr能中 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Technical Report</div><img src='images/paper/transdiff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Marrying Autoregressive Transformer and Diffusion with Multi-Reference Autoregression

  <!-- Dingcheng Zhen $$^*$$, **Qian Qiao**$$^*$$, Tan Yu$$^*$$, Xu Zhen, Kangxi Wu, -->

  *Technical Report, 2025.*

  [**[arxiv]**](https://arxiv.org/pdf/2506.09482) [**[code]**](https://github.com/TransDiff/TransDiff) [![GitHub](https://img.shields.io/github/stars/TransDiff/TransDiff.svg?style=social&amp;label=Official)](https://github.com/TransDiff/TransDiff) [![Citations](https://img.shields.io/badge/Citations-2-007EC6?style=flat-square)](https://scholar.google.com.hk/scholar?hl=zh-CN&as_sdt=0%2C5&q=Marrying+Autoregressive+Transformer+and+Diffusion+with+Multi-Reference+Autoregression&btnG=) 
  [![Arxiv](https://img.shields.io/badge/arXiv-2506.09482-B31B1B?style=flat-square)](https://arxiv.org/abs/2506.09482) [![HuggingFace](https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-FFD21E?style=flat-square)](https://huggingface.co/zhendch/Transdiff)
</div>
</div>

<!-- 在学校的一些工作 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2024</div><img src='images/paper/dnts.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- DNTextSpotter: Arbitrary-Shaped Scene Text Spotting via Improved Denoising Training,

  <!-- **Qian Qiao**, Yu Xie, Jun Gao, Jiaqin Fan -->

  *ACM MM, 2024.*

  [**[arxiv]**](https://qianqiaoai.github.io/projects/dntextspotter/DNTextSpotter.pdf)  [**[code]**](https://github.com/yyyyyxie/DNTextSpotter)  [**[project]**](https://qianqiaoai.github.io/projects/dntextspotter)  [![GitHub](https://img.shields.io/github/stars/yyyyyxie/DNTextSpotter.svg?style=social&amp;label=Official)](https://github.com/yyyyyxie/DNTextSpotter)  [![Citations](https://img.shields.io/badge/Citations-22-007EC6?style=flat-square)](https://scholar.google.com.hk/scholar?hl=zh-CN&as_sdt=0%2C5&q=DNTextSpotter%3A+Arbitrary-Shaped+Scene+Text+Spotting+via+Improved+Denoising+Training&btnG=)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/paper/aim.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- AIM: Let Any Multi-modal Large Language Models Embrace Efficient In-Context Learning

  <!-- Jun Gao, **Qian Qiao**, Zili Wang, Ziqiang Cao, Wenjie Li -->

  *AAAI, 2025.*

  [![Citations](https://img.shields.io/badge/Citations-17-007EC6?style=flat-square)](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=AIM%3A+Let+Any+Multi-modal+Large+Language+Models+Embrace+Efficient+In-Context+Learning&btnG=)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2024</div><img src='images/paper/icassp.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Talds-net: Task-aware adaptive local descriptors selection for few-shot image classification

  <!-- **Qian Qiao**, Yu Xie, Ziyin Zeng, Fanzhang Li -->

  *ICASSP, 2024.*

  [**[arxiv]**](https://arxiv.org/pdf/2312.05449)  [**[code]**](https://github.com/QianJoe/TAL-Net)   [![GitHub](https://img.shields.io/github/stars/QianJoe/TAL-Net.svg?style=social&amp;label=Official)](https://github.com/QianJoe/TAL-Net)  [![Citations](https://img.shields.io/badge/Citations-22-007EC6?style=flat-square)](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TALDS-NET%3A+TASK-AWARE+ADAPTIVE+LOCAL+DESCRIPTORS+SELECTION+FOR+FEW-SHOT+IMAGE+CLASSIFICATION&btnG=)
  [![Arxiv](https://img.shields.io/badge/arXiv-2312.05449-B31B1B?style=flat-square)](https://arxiv.org/abs/2312.05449)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neurocomputing 2025</div><img src='images/paper/lie.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- A Lie group Laplacian Support Vector Machine for semi-supervised learning

  <!-- **Qian Qiao**, Yu Xie, Ziyin Zeng, Fanzhang Li -->

  *Neurocomputing, 2025.*

  [**[arxiv]**](https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=4870746)  [**[code]**](https://github.com/QianJoe/TAL-Net)   [![GitHub](https://img.shields.io/github/stars/QianJoe/TAL-Net.svg?style=social&amp;label=Official)](https://github.com/QianJoe/TAL-Net)  [![Citations](https://img.shields.io/badge/Citations-11-007EC6?style=flat-square)](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TALDS-NET%3A+TASK-AWARE+ADAPTIVE+LOCAL+DESCRIPTORS+SELECTION+FOR+FEW-SHOT+IMAGE+CLASSIFICATION&btnG=)
  [![Arxiv](https://img.shields.io/badge/arXiv-2312.05449-B31B1B?style=flat-square)](https://arxiv.org/abs/2312.05449)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PRICAI 2025</div><img src='images/paper/deeptts.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Deeptts: Enhanced transformer-based text spotter via deep interaction between detection and recognition tasks

  <!-- **Qian Qiao**, Yu Xie, Ziyin Zeng, Fanzhang Li -->

  *PRICAI, 2024.*

  [**[arxiv]**](https://arxiv.org/pdf/2312.05449)  [**[code]**](https://github.com/QianJoe/TAL-Net)   [![GitHub](https://img.shields.io/github/stars/QianJoe/TAL-Net.svg?style=social&amp;label=Official)](https://github.com/QianJoe/TAL-Net)  [![Citations](https://img.shields.io/badge/Citations-05-007EC6?style=flat-square)](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TALDS-NET%3A+TASK-AWARE+ADAPTIVE+LOCAL+DESCRIPTORS+SELECTION+FOR+FEW-SHOT+IMAGE+CLASSIFICATION&btnG=)
  [![Arxiv](https://img.shields.io/badge/arXiv-2312.05449-B31B1B?style=flat-square)](https://arxiv.org/abs/2312.05449)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2025</div><img src='images/paper/qp.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- QPruner: Probabilistic Decision Quantization for Structured Pruning in Large Language Models

  <!-- **Qian Qiao**, Yu Xie, Ziyin Zeng, Fanzhang Li -->

  *NAACL, 2024.*

  [**[arxiv]**](https://arxiv.org/pdf/2312.05449)  [**[code]**](https://github.com/QianJoe/TAL-Net)   [![GitHub](https://img.shields.io/github/stars/QianJoe/TAL-Net.svg?style=social&amp;label=Official)](https://github.com/QianJoe/TAL-Net)  [![Citations](https://img.shields.io/badge/Citations-02-007EC6?style=flat-square)](https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TALDS-NET%3A+TASK-AWARE+ADAPTIVE+LOCAL+DESCRIPTORS+SELECTION+FOR+FEW-SHOT+IMAGE+CLASSIFICATION&btnG=)
  [![Arxiv](https://img.shields.io/badge/arXiv-2312.05449-B31B1B?style=flat-square)](https://arxiv.org/abs/2312.05449)

</div>
</div>


# Other Publications
- BVRCC: Bootstrapping Video Retrieval via Cross-Matching Correction
- Temporal-Conditional Referring Video Object Segmentation with Noise-Free Text-to-Video Diffusion Model
- STRA: A Simple Token Replacement Strategy Alleviating Exposure Bias in Text Generation
- Efficient fine-tuning of quantized models via adaptive rank and bitwidth

# 🎖 Honors and Awards
- National Scholarship, 2024 (MS. student)
- Outstanding Graduate Award, 2025 (Rate<5%)
- Special Grade Scholarship, 2023 (MS. student)

# 🆚 Academic Competitions
* **2024.06**: My collaborator Yu Xie and I won **three first places** and **one second place** in the **ICADR2024-Text Map** Challenge (ICADR is one of the most authoritative conferences in the field of OCR), and we have been **invited** to present a technical report at ICADR2024.

# 🤝 Academic Service
- **Conference Area Chair**: ICME 2026, PRCV 2025
- **Conference Program Committee Member**: ICLR, ICML, NeurIPS, ACL ARR, AAAI, IJCAI, ACM MM, CVPR, ECCV, ICME, ICASSP, etc.
- **Journal Reviewer**: IEEE TIP, IEEE TMM, IEEE TCSVT, PR, Neurocomputing

<!-- # 💻 Internships -->
<!-- - <img src="images/tencent_ailab.jpg" alt="sym" width="4%"> *2024.04 - 2024.09*, [AI Lab CVC](https://github.com/AILab-CVC), Tencent, Research Intern, supervised by Dr. [Yong Zhang](https://yzhang2016.github.io/) -->
<!-- - <img src="images/b_logo.png" alt="sym" width="4%"> *2024.02 - 2024.05*, Research Intern, bilibili Inc, Shanghai, China.
- <img src="images/soul_logo.png" alt="sym" width="4%"> *2024.06 - 2024.10*, Research Intern, Soul AILab, Shanghai, China. -->



# Visitors
<div id="clustrmaps-container" style="width: 500px; height: 500px;">
    <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=4xiJoi-pCQJ8v08IPqo_ew00ryTF5iXNnlQqK-PIC_Y&cl=ffffff&w=a"></script>
</div>