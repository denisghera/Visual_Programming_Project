import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";

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

function RealEstateList() {
  const [visibleListings, setVisibleListings] = useState(3); // Number of listings initially visible
  const loadMoreListings = () => {
    setVisibleListings((prevVisibleListings) => prevVisibleListings + 3); // Increase the number of visible listings by 3
  };

  return (
    <div>
      <center>
        <h1 className="text-3xl text-center font-semibold mb-8">
          Explore Haunted Homes
        </h1>
        <div className="container mx-auto">
          <p
            className="text-gray-300 text-center"
            style={{ margin: "2vw", fontSize: "20px" }}
          >
            Here, you can find all the haunted homes you've ever dreamed of. Get
            ready to immerse yourself in a world of supernatural wonders and
            unearthly delights. Welcome to Haunted Homes Realty, where spectral
            dreams become a thrilling reality.
          </p>
        </div>
        {listings.slice(0, visibleListings).map((listing) => (
          <div key={listing.id} className="flex flex-wrap items-center mb-8">
            <div className="w-full md:w-1/2">
              <img
                src={listing.image}
                alt={listing.title}
                className="featured-house"
              />
            </div>
            <div className="w-full md:w-2/5 px-4">
              <h2 className="text-2xl font-semibold mb-4">{listing.title}</h2>
              <p className="text-gray-300 mb-4">{listing.description}</p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-blue-800 text-white rounded-lg shadow-lg font-semibold hover:bg-blue-700"
              >
                Buy Now {listing.price}
              </Link>
            </div>
          </div>
        ))}
        {visibleListings < listings.length && (
          <button
            onClick={loadMoreListings}
            className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700"
          >
            Load More
          </button>
        )}
      </center>

      <div className="container mx-auto">
        <p
          className="text-gray-300 text-center"
          style={{ margin: "2vw", fontSize: "15px" }}
        >
          Haunted Homes Realty specializes in selling haunted real estate. While
          we strive to provide accurate information about the properties, we are
          not responsible for any paranormal encounters or supernatural
          phenomena that may occur during or after the ownership of the
          property. Buyers should conduct their own research and due diligence
          to ensure the suitability of the property.
        </p>
      </div>
      <div className="container mx-auto">
        <p
          className="text-gray-300 text-center"
          style={{ margin: "2vw", fontSize: "15px" }}
        >
          Standard legal and financial considerations apply to the sale of
          haunted properties. Prices and availability are subject to change
          without notice.
        </p>
      </div>
      <div style={{ marginBottom: "18vh" }}></div>
      <Footer />
    </div>
  );
}

export default RealEstateList;