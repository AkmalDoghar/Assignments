// names-allah.js
const namesAllah = [
  { arabic: "ٱلرَّحْمَـٰن", translit: "Ar-Rahmān", urdu: "بہت مہربان" },
  { arabic: "ٱلرَّحِيم", translit: "Ar-Raḥīm", urdu: "نہایت رحم کرنے والا" },
  { arabic: "ٱلْمَلِك", translit: "Al-Malik", urdu: "بادشاہ، حاکم مطلق" },
  { arabic: "ٱلْقُدُّوس", translit: "Al-Quddūs", urdu: "نہایت پاکیزہ" },
  { arabic: "ٱلسَّلَام", translit: "As-Salām", urdu: "سلامتی دینے والا" },
  { arabic: "ٱلْمُؤْمِن", translit: "Al-Mu’min", urdu: "امن دینے والا" },
  { arabic: "ٱلْمُهَيْمِن", translit: "Al-Muhaymin", urdu: "نگہبان" },
  { arabic: "ٱلْعَزِيز", translit: "Al-‘Azīz", urdu: "زبردست، غالب" },
  { arabic: "ٱلْجَبَّار", translit: "Al-Jabbār", urdu: "زبردست طاقت والا" },
  { arabic: "ٱلْمُتَكَبِّر", translit: "Al-Mutakabbir", urdu: "بڑائی والا" },
  { arabic: "ٱلْخَالِق", translit: "Al-Khāliq", urdu: "پیدا کرنے والا" },
  { arabic: "ٱلْبَارِئ", translit: "Al-Bāri’", urdu: "نقشہ بنانے والا" },
  { arabic: "ٱلْمُصَوِّر", translit: "Al-Muṣawwir", urdu: "صورت بنانے والا" },
  { arabic: "ٱلْغَفَّار", translit: "Al-Ghaffār", urdu: "بہت بخشنے والا" },
  { arabic: "ٱلْقَهَّار", translit: "Al-Qahhār", urdu: "زبردست غلبہ رکھنے والا" },
  { arabic: "ٱلْوَهَّاب", translit: "Al-Wahhāb", urdu: "خوب عطا کرنے والا" },
  { arabic: "ٱلرَّزَّاق", translit: "Ar-Razzāq", urdu: "رزق دینے والا" },
  { arabic: "ٱلْفَتَّاح", translit: "Al-Fattāḥ", urdu: "فیصلہ کرنے والا" },
  { arabic: "ٱلْعَلِيم", translit: "Al-‘Alīm", urdu: "سب کچھ جاننے والا" },
  { arabic: "ٱلْقَابِض", translit: "Al-Qābiḍ", urdu: "روکنے والا" },
  { arabic: "ٱلْبَاسِط", translit: "Al-Bāsiṭ", urdu: "کشادگی دینے والا" },
  { arabic: "ٱلْخَافِض", translit: "Al-Khāfiḍ", urdu: "پست کرنے والا" },
  { arabic: "ٱلرَّافِع", translit: "Ar-Rāfi‘", urdu: "بلند کرنے والا" },
  { arabic: "ٱلْمُعِزّ", translit: "Al-Mu‘izz", urdu: "عزت دینے والا" },
  { arabic: "ٱلْمُذِلّ", translit: "Al-Mudhill", urdu: "ذلت دینے والا" },
  { arabic: "ٱلسَّمِيع", translit: "As-Samī‘", urdu: "سب سننے والا" },
  { arabic: "ٱلْبَصِير", translit: "Al-Baṣīr", urdu: "سب کچھ دیکھنے والا" },
  { arabic: "ٱلْحَكَم", translit: "Al-Ḥakam", urdu: "فیصلہ کرنے والا" },
  { arabic: "ٱلْعَدْل", translit: "Al-‘Adl", urdu: "انصاف کرنے والا" },
  { arabic: "ٱلْلَّطِيف", translit: "Al-Laṭīf", urdu: "نرمی سے عطا کرنے والا" },
  { arabic: "ٱلْخَبِير", translit: "Al-Khabīr", urdu: "سب باخبر" },
  { arabic: "ٱلْحَلِيم", translit: "Al-Ḥalīm", urdu: "بردبار" },
  { arabic: "ٱلْعَظِيم", translit: "Al-‘Aẓīm", urdu: "بہت عظمت والا" },
  { arabic: "ٱلْغَفُور", translit: "Al-Ghafūr", urdu: "بہت زیادہ معاف کرنے والا" },
  { arabic: "ٱلشَّكُور", translit: "Ash-Shakūr", urdu: "قدردان" },
  { arabic: "ٱلْعَلِيّ", translit: "Al-‘Aliyy", urdu: "سب سے بلند" },
  { arabic: "ٱلْكَبِير", translit: "Al-Kabīr", urdu: "سب سے بڑا" },
  { arabic: "ٱلْحَفِيظ", translit: "Al-Ḥafīẓ", urdu: "نگہبان" },
  { arabic: "ٱلْمُقِيت", translit: "Al-Muqīt", urdu: "روزی پہنچانے والا" },
  { arabic: "ٱلْحَسِيب", translit: "Al-Ḥasīb", urdu: "کافی حساب رکھنے والا" },
  { arabic: "ٱلْجَلِيل", translit: "Al-Jalīl", urdu: "بہت عظمت والا" },
  { arabic: "ٱلْكَرِيم", translit: "Al-Karīm", urdu: "بہت سخی" },
  { arabic: "ٱلرَّقِيب", translit: "Ar-Raqīb", urdu: "نگران" },
  { arabic: "ٱلْمُجِيب", translit: "Al-Mujīb", urdu: "دعائیں سننے اور قبول کرنے والا" },
  { arabic: "ٱلْوَاسِع", translit: "Al-Wāsi‘", urdu: "بہت وسعت والا" },
  { arabic: "ٱلْحَكِيم", translit: "Al-Ḥakīm", urdu: "حکمت والا" },
  { arabic: "ٱلْوَدُود", translit: "Al-Wadūd", urdu: "محبت کرنے والا" },
  { arabic: "ٱلْمَجِيد", translit: "Al-Majīd", urdu: "بزرگی والا" },
  { arabic: "ٱلْبَاعِث", translit: "Al-Bā‘ith", urdu: "اٹھانے والا" },
  { arabic: "ٱلشَّهِيد", translit: "Ash-Shahīd", urdu: "گواہ" },
  { arabic: "ٱلْحَق", translit: "Al-Ḥaqq", urdu: "حق" },
  { arabic: "ٱلْوَكِيل", translit: "Al-Wakīl", urdu: "نگران، کارساز" },
  { arabic: "ٱلْقَوِيّ", translit: "Al-Qawwiyy", urdu: "طاقتور" },
  { arabic: "ٱلْمَتِين", translit: "Al-Matīn", urdu: "مضبوط" },
  { arabic: "ٱلْوَلِيّ", translit: "Al-Waliyy", urdu: "دوست، سرپرست" },
  { arabic: "ٱلْحَمِيد", translit: "Al-Ḥamīd", urdu: "تعریف کے لائق" },
  { arabic: "ٱلْمُحْصِي", translit: "Al-Muḥṣī", urdu: "گننے والا" },
  { arabic: "ٱلْمُبْدِئ", translit: "Al-Mubdi’", urdu: "پہلی بار پیدا کرنے والا" },
  { arabic: "ٱلْمُعِيد", translit: "Al-Mu‘īd", urdu: "دوبارہ پیدا کرنے والا" },
  { arabic: "ٱلْمُحْيِي", translit: "Al-Muḥyī", urdu: "زندگی دینے والا" },
  { arabic: "ٱلْمُمِيت", translit: "Al-Mumīt", urdu: "موت دینے والا" },
  { arabic: "ٱلْحَيّ", translit: "Al-Ḥayy", urdu: "ہمیشہ زندہ رہنے والا" },
  { arabic: "ٱلْقَيُّوم", translit: "Al-Qayyūm", urdu: "سب کچھ سنبھالنے والا" },
  { arabic: "ٱلْوَاجِد", translit: "Al-Wājid", urdu: "پانے والا" },
  { arabic: "ٱلْمَاجِد", translit: "Al-Mājid", urdu: "بزرگی والا" },
  { arabic: "ٱلْواحِد", translit: "Al-Wāḥid", urdu: "ایک" },
  { arabic: "ٱلْأَحَد", translit: "Al-Aḥad", urdu: "اکیلا" },
  { arabic: "ٱلصَّمَد", translit: "Aṣ-Ṣamad", urdu: "ہر چیز اس کی محتاج" },
  { arabic: "ٱلْقَادِر", translit: "Al-Qādir", urdu: "قدرت والا" },
  { arabic: "ٱلْمُقْتَدِر", translit: "Al-Muqtadir", urdu: "کامل قدرت والا" },
  { arabic: "ٱلْمُقَدِّم", translit: "Al-Muqaddim", urdu: "آگے بڑھانے والا" },
  { arabic: "ٱلْمُؤَخِّر", translit: "Al-Mu’akhkhir", urdu: "پیچھے رکھنے والا" },
  { arabic: "ٱلأَوَّل", translit: "Al-Awwal", urdu: "سب سے پہلا" },
  { arabic: "ٱلآخِر", translit: "Al-Ākhir", urdu: "سب سے آخر" },
  { arabic: "ٱلظَّاهِر", translit: "Aẓ-Ẓāhir", urdu: "ظاہر" },
  { arabic: "ٱلْبَاطِن", translit: "Al-Bāṭin", urdu: "پوشیدہ" },
  { arabic: "ٱلْوَالِي", translit: "Al-Wālī", urdu: "نگران" },
  { arabic: "ٱلْمُتَعَالِي", translit: "Al-Muta‘ālī", urdu: "بلندی والا" },
  { arabic: "ٱلْبَرّ", translit: "Al-Barr", urdu: "نیکی کرنے والا" },
  { arabic: "ٱلتَّوَاب", translit: "At-Tawwāb", urdu: "توبہ قبول کرنے والا" },
  { arabic: "ٱلْمُنْتَقِم", translit: "Al-Muntaqim", urdu: "بدلہ لینے والا" },
  { arabic: "ٱلْعَفُوّ", translit: "Al-‘Afūw", urdu: "معاف کرنے والا" },
  { arabic: "ٱلرَّؤُوف", translit: "Ar-Ra’ūf", urdu: "نرم دل" },
  { arabic: "مَالِكُ ٱلْمُلْك", translit: "Mālik-ul-Mulk", urdu: "بادشاہوں کا بادشاہ" },
  { arabic: "ذُوالْجَلَالِ وَٱلْإِكْرَام", translit: "Dhū-l-Jalāli wa-l-Ikrām", urdu: "جلال و بزرگی والا" },
  { arabic: "ٱلْمُقْسِط", translit: "Al-Muqsiṭ", urdu: "انصاف کرنے والا" },
  { arabic: "ٱلْجَامِع", translit: "Al-Jāmi‘", urdu: "اکٹھا کرنے والا" },
  { arabic: "ٱلْغَنيّ", translit: "Al-Ghaniyy", urdu: "بے نیاز" },
  { arabic: "ٱلْمُغْنِي", translit: "Al-Mughnī", urdu: "دولت دینے والا" },
  { arabic: "ٱلْمَانِع", translit: "Al-Māni‘", urdu: "روکنے والا" },
  { arabic: "ٱلضَّارَ", translit: "Aḍ-Ḍārr", urdu: "نقصان پہنچانے والا" },
  { arabic: "ٱلنَّافِع", translit: "An-Nāfi‘", urdu: "فائدہ دینے والا" },
  { arabic: "ٱلنُّور", translit: "An-Nūr", urdu: "روشنی" },
  { arabic: "ٱلْهَادِي", translit: "Al-Hādī", urdu: "ہدایت دینے والا" },
  { arabic: "ٱلْبَدِيع", translit: "Al-Badī‘", urdu: "نیا پیدا کرنے والا" },
  { arabic: "ٱلْبَاقِي", translit: "Al-Bāqī", urdu: "ہمیشہ باقی رہنے والا" },
  { arabic: "ٱلْوَارِث", translit: "Al-Wārith", urdu: "وارث" },
  { arabic: "ٱلرَّشِيد", translit: "Ar-Rashīd", urdu: "راہ دکھانے والا" },
  { arabic: "ٱلصَّبُور", translit: "Aṣ-Ṣabūr", urdu: "بردباری والا" }
];