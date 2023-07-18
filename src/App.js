import { useState } from "react";

import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Select from "./components/Select";

const thailand = [
  {
    id: 1,
    name: "Chiang Mai",
    image: "image/Chiang Mai.jpg",
    position: "North",
    information:
      "Chiang Mai in northern Thailand is a welcome reprieve from the commotion of Bangkok. Here, you'll be treated to beautiful, mountainous landscapes and an Old City full of historical temples, such as Wat Phra Singh and Wat Chedi Luang.",
  },
  {
    id: 2,
    name: "Bangkok",
    image: "image/Bangkok.jpg",
    position: "Central",
    information:
      "Thailand's capital city is nothing short of exhilarating. The city offers a hearty mix of big-city bustle and modern sights, such as the Jim Thompson House, alongside ancient attractions, including Wat Arun, Wat Pho and the Grand Palace.",
  },
  {
    id: 3,
    name: "Phuket",
    image: "image/Phuket.jpg",
    position: "South",
    information:
      "Phuket is the largest island in Thailand and also the most popular with travelers. The island draws visitors in with its many palm-fringed beaches and relatively low travel costs, including everything from food to hotels.",
  },
  {
    id: 4,
    name: "Ko Samui",
    image: "image/Ko Samui.jpg",
    position: "South",
    information:
      "Home to five-star resorts, amazing nightlife and some of Thailand's most beautiful beaches, the island of Ko Samui has something for everyone. When you're not lounging on the white sand, pamper yourself with a luxurious spa treatment, visit an elephant sanctuary or explore ancient temples like Wat Plai Laem and Wat Phra Yai, also known as the Big Buddha Temple. ",
  },
  {
    id: 5,
    name: "Phang Nga",
    image: "image/Phang Nga.jpg",
    position: "South",
    information:
      "Although the region was devastated by the 2004 Indian Ocean tsunami, Phang Nga has recovered and rebuilt. During the cool (though still relatively hot), dry season (from November to February), tourists descend upon the province to check out protected areas like Mu Ko Surin National Park, one of the best diving sites in Thailand.",
  },
  {
    id: 6,
    name: "Railay Beach",
    image: "image/Railay Beach.jpg",
    position: "South",
    information:
      "Railay Beach features four stunning stretches of sand to sink your toes into. Railay West and Phra Nang Beach are two of the peninsula's most popular beach spots, offering luxury resorts, soft sand and jaw-dropping views of limestone cliffs.",
  },
  {
    id: 7,
    name: "Trang",
    image: "image/Trang.jpg",
    position: "South",
    information:
      "Trang's secluded beaches and stunning islands have made it an up-and-coming travel destination. The dramatic surrounding landscapes (think: lush jungles and limestone mountains) contrast beautifully against the beaches' white sands and crystal-clear waters.",
  },
  {
    id: 8,
    name: "Ko Phi Phi",
    image: "image/Ko Phi Phi.jpg",
    position: "South",
    information:
      "Ko Phi Phi features some of Thailand's most popular beaches. Phi Phi Don, the larger of the two main islands, is known for its lively party scene, hidden coves and deep coral reefs and gardens that are ideal for snorkeling and diving. ",
  },
  {
    id: 9,
    name: "Chiang Rai",
    image: "image/Chiang Rai.jpg",
    position: "North",
    information:
      "Situated in northern Thailand, there are countless reasons to visit Chiang Rai. Wat Rong Suea Ten (The Blue Temple) and Wat Phra Kaeo (Temple of the Emerald Buddha) are two of the city's most popular cultural landmarks, but travelers should also save time for the incredible Wat Rong Khun, Chiang Rai's iconic all-white temple.",
  },
  {
    id: 10,
    name: "Kanchanaburi Province",
    image: "image/Kanchanaburi Province.jpg",
    position: "South",
    information:
      "Thailand's third-largest province captivates travelers with its natural beauty. Its diverse landscape – which features everything from seven-tiered waterfalls, rivers and mountains to Neolithic caves and national parks – is ideal for outdoor pursuits, including hiking and rafting. But a trip here wouldn't be complete without visiting some of the area's World War II sites, including the notorious Bridge over the River Kwai.",
  },
];

function App() {
  const [data, setData] = useState(thailand);
  const handleParentStateUpdate = (newValue) => {
    var thailandOnSelectRegion = thailand.filter((item) => item.position == newValue);
    setData(thailandOnSelectRegion);
  };

  return (
    <div className='App'>
      <Header />
      <Select onSetSelect={handleParentStateUpdate} />
      <Content data={data} />
      <Footer />
    </div>
  );
}

export default App;
