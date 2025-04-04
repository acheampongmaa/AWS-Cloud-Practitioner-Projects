document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;
    let isTransitioning = false;

    const siteData = [
        {
            title: "Kwame Nkrumah Mausoleum",
            description: "The Kwame Nkrumah Mausoleum, located in Accra, Ghana, is a majestic memorial dedicated to Kwame Nkrumah, Ghana's first President and a key figure in the country's struggle for independence. The mausoleum, with its commanding silhouette, reflects the visionary leadership and indomitable spirit of Nkrumah. The architectural design is symbolic, featuring a large marble edifice adorned with intricate carvings and a towering black star, emblematic of Nkrumah's Pan-African vision. The surrounding gardens and reflecting pools contribute to a serene and contemplative atmosphere, inviting visitors to reflect on Nkrumah's legacy and the broader quest for African unity and self-determination. Within the mausoleum, Nkrumah's final resting place is marked by a sarcophagus, providing a space for dignified reflection. The museum adjacent to the mausoleum houses a wealth of historical artifacts, photographs, and documents, offering a comprehensive narrative of Nkrumah's life, political career, and his contributions to the decolonization movement in Africa. The Kwame Nkrumah Mausoleum serves as both a commemorative site and an educational center, preserving the memory of one of Africa's foremost political figures. It stands as a testament to Ghana's journey toward independence and the enduring importance of Nkrumah's vision for a united and prosperous Africa. Visitors to the mausoleum are not only immersed in Ghana's history but also invited to reflect on the broader aspirations for social justice, equality, and pan-African solidarity. ",
            image: "images/kwame1.jpg"
        },
        {
            title: "Cape Coast Castle",
            description: "Cape Coast Castle, situated on the coast of Ghana, is an enduring symbol of the transatlantic slave trade and the complex historical interplay between European powers and West Africa. Originally constructed by the Swedes in the 17th century and later expanded by the British, the castle served as a key outpost for the exchange of goods, including enslaved Africans.The castle's architecture, characterized by sturdy stone walls and imposing forts, echoes the harsh realities that unfolded within its confines. Its dungeons, cramped and devoid of light, housed countless men, women, and children who were forcibly transported across the Atlantic. The infamous 'Door of No Return' stands as a haunting threshold through which enslaved individuals embarked on a perilous journey into the unknown. Cape Coast Castle, now a UNESCO World Heritage site, invites visitors to confront the sobering history of the slave trade through guided tours. The museum within the castle walls meticulously recounts the stories of those who suffered and resisted, emphasizing the resilience of the human spirit amid unspeakable hardship. The castle's strategic location along the scenic coastline adds a layer of complexity to its narrative, juxtaposing the beauty of the surroundings with the painful history embedded in its stone walls. Today, Cape Coast Castle stands as a solemn memorial and educational site, fostering remembrance and understanding while acknowledging the need for collective reflection on the enduring impact of historical injustices.          ",
            image: "images/cape2.jpg"
        },
        {
            title: "Elmina Castle",
            description: "Elmina Castle, a haunting relic along the coast of Ghana, stands as a poignant testament to the brutal history of the transatlantic slave trade. Constructed by the Portuguese in the 15th century, it represents one of the earliest European settlements in West Africa. The imposing structure, with its stark whitewashed walls, served as a hub for the trafficking of enslaved Africans, enduring centuries of exploitation under Portuguese, Dutch, and British control. Within the castle's confines, visitors confront the chilling dungeons where enslaved individuals were confined before their harrowing journey across the Atlantic. The Door of No Return, a grim portal through which captives were forced onto slave ships, remains a somber symbol of the profound human suffering that unfolded within these walls.   Today, Elmina Castle is recognized as a UNESCO World Heritage site, its stark architecture and turbulent history preserved to educate and memorialize. Guided tours delve into the depths of its dungeons, recounting stories of resilience, resistance, and the lasting impact of this dark chapter in global history. Elmina Castle stands as both a stark reminder of humanity's capacity for cruelty and a call to remember and reflect upon the shared history of nations connected by tragedy and resilience",
            image: "images/elmina-castle.jpg"
        },
        {
            title: "Wli Waterfalls",
            description: "Wli Waterfalls, located in the Volta Region of Ghana, is a captivating natural marvel that stands as the highest waterfall in West Africa. Surrounded by pristine rainforest and verdant hills, the falls boast a majestic drop of approximately 80 meters. Visitors are welcomed by the rhythmic sound of cascading water as they embark on a trek through the lush terrain to reach the base.   The journey to Wli Waterfalls is a nature lover's delight, with diverse flora and fauna lining the path. The falls are fed by the Agumatsa River, creating a refreshing pool at the base where adventurous souls can take a dip. The captivating spectacle of water rushing over the rocks against a backdrop of vibrant greenery offers a serene escape from the hustle of urban life. The Wli Waterfalls area is also a haven for birdwatchers, as the surrounding forests host a variety of avian species. Exploring the nearby Tafi Atome Monkey Sanctuary and Tafi Abuife Kente Village provides a well-rounded cultural and ecological experience for visitors. Local guides often share tales about the significance of the falls in the cultural heritage of the surrounding communities, adding depth to the visitor's understanding of the area.          Whether it's the exhilarating hike, the refreshing mist from the falls, or the cultural richness of the region, Wli Waterfalls offers a holistic and memorable experience, making it a must-visit destination for those seeking both natural beauty and cultural immersion in the heart of West Africa.",
            image: "images/wli1.jpg"
        }
    ];

    function showSlide(index) {
        if (!isTransitioning) {
            isTransitioning = true;
            const newTransformValue = -index * 100 + '%';
            carousel.style.transform = `translateX(${newTransformValue})`;

            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % siteData.length;
        showSlide(currentIndex);
    }

    function openModal(index) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <h2>${siteData[index].title}</h2>
            <img src="${siteData[index].image}" alt="${siteData[index].title}">
            <p>${siteData[index].description}</p>
        `;

        const siteModal = document.getElementById('siteModal');
        siteModal.style.display = 'block';
    }

    window.closeModal = function () {
        const siteModal = document.getElementById('siteModal');
        siteModal.style.display = 'none';
    };

    // Attach click event listeners to carousel items
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index);
        });
    });

    setInterval(nextSlide, 5000);
});
