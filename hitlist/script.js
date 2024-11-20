const slides = document.querySelectorAll('.slide');
const devotionalTitle = document.getElementById('devotionalTitle');
const devotionalText = document.getElementById('devotionalText');

const slideContents = [
  {
    title: "“His Grace is Sufficient” - Brad Wilcox",
    text: "Wilcox explains that grace is not only about being saved 'after all we can do,' but also about transforming us throughout our lives. He emphasizes that grace is an active force, empowering us to change, rather than merely forgiving us."
  },
  {
    title: "“Stand Forever” - Lawrence E. Corbridge",
    text: "Corbridge addresses doubt and faith, urging listeners to hold onto foundational beliefs, especially when facing questions or uncertainties. He teaches that some truths are so profound that they merit unwavering commitment."
  },
  {
    title: "“Be 100 Percent Responsible” - Lynn G. Robbins",
    text: "Robbins emphasizes personal accountability, suggesting that taking full responsibility for one’s actions is essential to personal growth. He contrasts blaming with accountability, providing practical advice for living a purposeful, morally responsible life."
  },
  {
    title: "“Lifelong Conversation” - Dale G. Renlund",
    text: "Renlund discusses conversion as an ongoing process that extends throughout one’s life, not just a one-time event. By focusing on continuous spiritual growth, he inspires listeners to view conversion as a journey requiring dedication and daily effort."
  },
  {
    title: "“Cast Not Away Therefore Your Confidence” - Jeffrey R. Holland",
    text: "Holland encourages perseverance through trials, sharing that after spiritual experiences or personal revelations, we often face opposition. His advice to remain confident despite difficulties is widely cited."
  },
  {
    title: "“Of Souls, Symbols, and Sacraments” - Jeffrey R. Holland",
    text: "Holland explores the sanctity of intimacy within marriage, portraying it as a symbol of unity with eternal significance. This talk is valued for its perspective on personal relationships and the sacredness of marriage."
  },
  {
    title: "“Remember Lot’s Wife” - Jeffrey R. Holland",
    text: "Holland emphasizes the importance of moving forward without dwelling on past mistakes or regrets. His powerful message is about focusing on the future and letting go of what cannot be changed."
  },
  {
    title: "“For Times of Trouble” - Jeffrey R. Holland",
    text: "This talk encourages resilience and faith in the face of trials. Holland reassures listeners that divine help is always near, providing comfort and encouragement for those struggling with challenges."
  },
  {
    title: "“The Love and Laws of God” - Russell M. Nelson",
    text: "Nelson teaches the balance between God’s love and His laws, explaining that both are essential to understanding His character and expectations. This devotional addresses the importance of both mercy and obedience."
  },
  {
    title: "“We Need an Endowment” - Anthony Sweat",
    text: "Sweat emphasizes the need for spiritual power through temple worship and endowment, explaining the symbolism and significance of temple ordinances, encouraging a commitment to temple attendance."
  }
];

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  
  devotionalTitle.textContent = slideContents[index].title;
  devotionalText.textContent = slideContents[index].text;
}

// Initial setup
showSlide(currentSlide);






  