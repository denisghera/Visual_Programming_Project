const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/listings", (req, res) => {
  const listings = [
    {
      id: 1,
      title: "The Phantom Manor",
      image: "hosue1.jpg",
      description: "Step into the grandeur of The Majestic Manor, a timeless masterpiece that stands as a testament to architectural brilliance. This opulent estate, adorned with intricate carvings and majestic chandeliers, offers a glimpse into a bygone era of splendor. Each room tells a story of its own, with ornate furnishings and captivating artwork that transport you to a world of aristocracy and refinement. But beware, for within these regal walls resides the enigmatic spirit, Lady Genevieve, the Elegant Phantom of the Manor. Lady Genevieve, with her flowing gown and haunting beauty, wanders the halls, her mournful whispers echoing through the corridors. She holds the secrets of the manor's past, the scandals, and romances that unfolded within these hallowed grounds. Embrace the allure of The Majestic Manor, where history and the supernatural intertwine to create an unforgettable living experience.",
      price: "$1,800,000",
    },
    {
      id: 2,
      title: "The Whimsical Cottage",
      image: "house2.jpg",
      description: "Discover a whimsical retreat nestled amidst a lush countryside, where enchantment and charm await. The Whimsical Cottage is a haven of magic, where fairies dance in the moonlight and talking animals share their tales. This quaint abode is adorned with vibrant flowers, painted in cheerful pastels, and exudes an air of joy and playfulness. It is within these walls that you'll encounter Jasper, the Jovial Trickster Spirit. Jasper, with his mischievous grin and playful antics, brings laughter and unexpected surprises to every corner of the cottage. He delights in hiding keys, rearranging furniture, and leaving whimsical notes for the inhabitants. Embrace the whimsy of The Whimsical Cottage, where everyday life becomes an enchanting adventure, and let Jasper's lighthearted spirit fill your days with laughter and joy.",
      price: "$450,000",
    },
    {
      id: 3,
      title: "The Haunted Lighthouse",
      image: "lighthouse.jpg",
      description: "Perched on a desolate cliff overlooking the tempestuous sea, The Haunted Lighthouse stands as a steadfast guardian of the treacherous coastline. Its weathered walls bear witness to countless storms and shipwrecks, casting an eerie silhouette against the night sky. As you enter this beacon of the supernatural, you'll encounter Captain Bartholomew, the Lost Mariner. Captain Bartholomew, with his tattered captain's hat and spectral glow, roams the lighthouse, forever searching for his ill-fated ship. His mournful cries mingle with the crashing waves, telling tales of maritime tragedies and the unforgiving sea. Explore the labyrinthine corridors, climb the spiraling staircase, and witness the haunting beauty of The Haunted Lighthouse. Let Captain Bartholomew's ghostly presence guide your way and experience the allure of a nautical haunting like no other.",
      price: " $1,250,000",
    },
    {
      id: 4,
      title: "The Eerie Castle",
      image: "house3.jpg",
      description: "Venture into the realm of darkness and intrigue at The Eerie Castle, an imposing fortress that looms over the surrounding landscape. This gothic masterpiece, with its towering spires and forbidding stone walls, exudes an aura of mystery and foreboding. As you explore the castle's dimly lit corridors and hidden chambers, you'll encounter Victor, the Shadow Stalker. Victor, with his flowing black cloak and piercing gaze, drifts silently through the halls, his presence felt rather than seen. He is the keeper of ancient secrets and forgotten tales, whispering snippets of forbidden knowledge to those who dare to listen. Amidst the castle's eerie ambiance, discover hidden treasures, unravel the castle's dark history, and unlock the secrets of The Eerie Castle. Let Victor's spectral guidance lead you through a haunting journey where shadows dance and legends come to life.",
      price: "$3,500,000",
    },
    {
      id: 5,
      title: "The Haunted Chateau",
      image: "chateau.jpg",
      description: "Embark on a journey to a realm of opulence and spectral intrigue at The Haunted Chateau, a grand estate steeped in history and dark legends. This sprawling chateau, with its grand ballrooms and exquisite artwork, reflects a time of lavish indulgence and aristocratic decadence. Within these lavish halls resides Leopold, the Chivalrous Knight. Leopold, in his resplendent armor and with a flickering ghostly sword, roams the chateau, forever bound to protect its treasures and honor. His presence evokes a sense of chivalry and nobility, even in the face of the supernatural. Uncover the chateau's hidden passages, delve into forgotten chronicles, and experience the allure of The Haunted Chateau. Let Leopold's valiant spirit inspire you to embrace courage and honor in the face of the unknown.",
      price: "$4,200,000",
    },
    {
      id: 6,
      title: "The Cursed Villa",
      image: "house4.jpg",
      description: "Enter a realm of dark enchantment and cursed destinies at The Cursed Villa, a place where ancient curses and tragic tales have woven a web of melancholic allure. This dilapidated villa, with its crumbling walls and overgrown gardens, exudes a haunting beauty that draws you in. Within these forsaken halls resides Isabella, the Tragic Muse. Isabella, with her ghostly presence and mournful gaze, wanders the villa, forever trapped in a state of sorrow and longing. Her voice, filled with echoes of lost dreams and broken promises, resonates through the abandoned rooms. Explore the villa's decaying chambers, unlock forgotten diaries, and embrace the melancholic charm of The Cursed Villa. Let Isabella's haunting presence guide you through her tragic tale and uncover the bittersweet truths that lie within the villa's cursed existence.",
      price: " $950,000",
    },
    {
      id: 7,
      title: "The Enigmatic Mansion",
      image: "mansion.jpg",
      description: "Step into the enigmatic world of The Enigmatic Mansion, a place where secrets whisper through its halls and hidden passages lead to untold mysteries. This architectural marvel is a symphony of intrigue, with its maze-like structure and ornate details that leave visitors spellbound. Within these walls resides Amelia, the Mysterious Lady of the Mansion. Amelia, with her porcelain complexion and ethereal grace, haunts the ballroom, forever locked in a spectral waltz. Her haunting melodies fill the air, evoking a sense of melancholic beauty. Uncover the mansion's hidden rooms, decode cryptic messages, and immerse yourself in the enigma of The Enigmatic Mansion. Let Amelia's ghostly presence guide you through its secrets and unveil the captivating tales that lie within.",
      price: " $2,700,000",
    },
    {
      id: 8,
      title: "The Phantom Bungalow",
      image: "bungalow.jpg",
      description: "Discover a secluded haven where ethereal beauty and tranquility intertwine at The Phantom Bungalow. This charming retreat, nestled amidst lush gardens and shaded by ancient trees, offers respite from the chaos of the world. Within its walls resides Lucia, the Serene Spirit. Lucia, with her flowing white gown and serene countenance, emanates an aura of peace and harmony. She is often found in the garden, tending to spectral flowers that bloom with otherworldly radiance. The bungalow exudes a sense of calm, with its soft hues and gentle melodies that soothe the soul. Surrender to the serenity of The Phantom Bungalow, where time slows down, and the worries of the world fade away. Allow Lucia's tranquil presence to guide you towards inner harmony and a connection to the ethereal realm.",
      price: " $750,000",
    },
  ];

  res.json(listings);
});

app.get("/benefits", (req, res) => {
  const benefits = [
    {
      title: "Expert Ghostly History Reports",
      description:
        "Gain deep insights into the haunted houses' past, including documented paranormal activities, ghostly legends, and historical significance.",
    },
    {
      title: "Paranormal Investigations",
      description:
        "We collaborate with experienced paranormal investigators to provide thorough investigations of the properties, offering you an in-depth understanding of the supernatural occurrences within.",
    },
    {
      title: "Consultation with Spiritual Mediums",
      description:
        "Our team includes gifted mediums who can help you connect with the spirits residing in the homes, offering guidance and insights during the buying or selling process.",
    },
    {
      title: "Exclusive Access to Haunted Listings",
      description:
        "Gain early access to the latest haunted house listings before they hit the market, ensuring you have the best chance to secure your dream supernatural dwelling.",
    },
    {
      title: "Personalized Property Matching",
      description:
        "Our real estate experts will understand your unique preferences and match you with haunted houses that align with your desired location, size, history, and spectral activity.",
    },
    {
      title: "Haunted House Tours",
      description:
        "Experience the thrill firsthand with guided tours of the haunted properties, where you can witness the supernatural occurrences and embrace the chilling atmosphere.",
    },
  ];

  res.json(benefits);
});

app.get("/testimonials", (req, res) => {
  const testimonials = [
    {
      quote:
        "Haunted Homes Realty made it easy for me to find my dream haunted house. Their knowledge of the supernatural history and their dedication to finding the perfect spectral match for their clients is unparalleled.",
      author: "Samantha D."
    },
    {
      quote:
        "I was skeptical at first, but Haunted Homes Realty exceeded my expectations. They helped me navigate the spectral market and guided me through the process with professionalism and care.",
      author: "Michael R."
    },
    {
      quote:
        "The team at Haunted Homes Realty truly understands the unique needs of haunted house buyers. They provided exceptional service and found me the perfect ghostly abode. I couldn't be happier!",
      author: "Emily W."
    }
  ];

  res.json(testimonials);
});

app.get("/realtors", (req,res) => {
  const realtors = [
    {
      name: "Ghostly Agent Denis",
      description: "The Home Designer\nWith an impeccable eye for haunted aesthetics and an extensive knowledge of ghostly interior design, you can trust Ghostly Agent Denis to transform any haunted house into a captivating masterpiece that will leave both the living and the spirits in awe.",
      image: "ghost1.png"
    },
    {
      name: "Ghostly Agent Malina",
      description: "The Haunted Home Realtor\nWith years of experience in the housing market, Ghostly Agent Malina is the go-to professional when it comes to traditional real estate expertise, matching individuals with their perfect haunted homes.",
      image: "ghost2.png"
    },
    {
      name: "Ghostly Agent Mark",
      description: "The Paranormal Enthusiast\nWith an extraordinary ability to create communication between the living and the spirit world, Ghostly Agent Mark is our resident paranormal expert, armed with the unique talent to engage with ghosts and spirits on a profound level. Trust in their expertise to unravel the mysteries of the paranormal realm.",
      image: "ghost3.png"
    }
  ];

  res.json(realtors);
});

app.get("/contact", (req,res) => {
  const contact = [
    {
      name: "Ghostly Agent Denis",
      email: "denis@spookyrealestate.com",
      phone: "555-123-4567"
    },
    {
      name: "Ghostly Agent Malina",
      email: "malina@spookyrealestate.com",
      phone: "555-987-6543"
    },
    {
      name: "Ghostly Agent Mark",
      email: "mark@spookyrealestate.com",
      phone: "555-456-7890"
    }
  ];

  res.json(contact);
});

app.get("/faq", (req, res) => {
  const faq = [
    {
      question: "How do I schedule a haunted house viewing?",
      answer: "To schedule a haunted house viewing, simply contact one of our ghostly agents through email or telephone. They will be happy to assist you."
    },
    {
      question: "Are your haunted houses safe to live in?",
      answer: "Absolutely! Our ghostly agents ensure that all haunted houses meet the highest standards of supernatural safety. We thoroughly inspect each property to ensure it is suitable for both the living and the spirits."
    },
    {
      question: "Can I customize the haunting level of a house?",
      answer: "While you can't customize the haunting level directly, our ghostly agents can help you find a house that matches your desired level of spookiness, whether you prefer a mild haunting or a spine-chilling experience."
    },
    {
      question: "Are your haunted houses available for rent or purchase?",
      answer: "Our haunted houses are available for both rent and purchase. Whether you're looking for a temporary spooky experience or a long-term haunted home, we have options to suit your needs."
    }
  ];

  res.json(faq);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});