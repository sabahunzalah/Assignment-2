
var mobiles = {
    iphone: {
      iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: 200,
            ultrawide: 12,
            telephoto: 10,
            telephotoPeriscope: 10,
          },
          front: 10,
        },
        brand: "iphone",
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "./images/iphone7.webp"
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand: "iphone",
        camera: {
          rear: {
            main: 180,
            ultrawide: 15,
            telephoto: 10,
            telephotoPeriscope: 20,
          },
          front: 12,
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "./images/iphone8.jpg"
      },
      iphone8plus: {
        processor: "Snapdragon 5 Gen 6",
        memory: {
          ram: 8,
          storage: 128,
        },
        brand: "iphone",
        camera: {
          rear: {
            main: 160,
            ultrawide: 18,
            telephoto: 10,
            telephotoPeriscope: 8,
          },
          front: 16,
        },
        battery: 5000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "./images/iphone8plus.webp"
      },
      iphoneX: {
        processor: "Snapdragon 5 Gen 4",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand: "iphone",
        camera: {
          rear: {
            main: 130,
            ultrawide: 16,
            telephoto: 10,
            telephotoPeriscope: 18,
          },
          front: 14,
        },
        battery: 6000,
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "./images/iphone X.jpg"
      },
      iphone11: {
        processor: "Snapdragon 7 Gen 9",
        memory: {
          ram: 16,
          storage: 512,
        },
        camera: {
          rear: {
            main: 150,
            ultrawide: 24,
            telephoto: 16,
            telephotoPeriscope: 10,
          },
          front: 20,
        },
        brand: "iphone",
        battery: 10000,
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "./images/iphone11.webp"
      },
    },
    xiomi: {
      redmiA2: {
        modelName: "Mi 12 Pro",
        display: {
          size: 6.73,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 120,
        },
        brand: "xiomi",
        processor: "Snapdragon 8 Gen 1",
        memory: {
          ram: 8,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 4600,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "./images/redmi A2.png"
      },
      redmi10: {
        modelName: "Mi 8 Pro",
        display: {
          size: 5.73,
          resolution: "3000 x 1320",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand: "xiomi",
        processor: "Snapdragon 7 Gen 5",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 5000,
        operatingSystem: "Android 11",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "./images/redmi10.png"
      },
      redmi11: {
        modelName: "Mi 14 Pro",
        display: {
          size: 6.0,
          resolution: "3000 x 1240",
          panelType: "AMOLED",
          refreshRate: 150,
        },
        brand: "xiomi",
        processor: "Snapdragon 8 Gen 4",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image:"./images/redmi11.jpeg"
      },
      redmi12: {
        modelName: "Mi 12 Pro",
        display: {
          size: 7.4,
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 180,
        },
        brand: "xiomi",
        processor: "Snapdragon 12 Gen 1",
        memory: {
          ram: 12,
          storage: 512,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 8000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "./images/redmi12.webp"
      },
      redmi13: {
        modelName: "Mi 14 Pro",
        display: {
          size: 8.03,
          resolution: "4200 x 1540",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        brand: "xiomi",
        processor: "Snapdragon 8 Gen 6",
        memory: {
          ram: 12,
          storage: 256,
        },
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "./images/redmi13.jpg"
      },
      redmi13C: {
        modelName: "Mi 14 Pro",
        display: {
          size: 8.43,
          resolution: "4200 x 1340",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        processor: "Snapdragon 9 Gen 5",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand: "xiomi",
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: 10000,
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image:"./images/redmi13c.jpg"
      },
    },
    samsung : {
        samsungGalaxyS24: {
          brand: "Samsung",
          model: "Galaxy S24 Ultra",
          display: {
            size: "6.8 inches",
            resolution: "3088x1440",
            type: "AMOLED",
          },
          processor: "Snapdragon 8 Gen 2",
          memory: {
            ram: "12GB",
            storage: "512GB",
          },
          camera: {
            rear: {
              resolution: "108MP",
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            front: {
              resolution: "40MP",
            },
          },
          battery: {
            capacity: "5000mAh",
            fastCharging: "45W Super Fast Charging",
          },
          operatingSystem: "Android 14",
          specialFeatures: [
            "Fingerprint sensor",
            "Water resistance (IP68)",
            "No expandable storage",
          ],
          image: "./images/samsunggalaxsyS24.jpeg"
        },
        samsungGalaxyS51: {
          brand: "Samsung",
          model: "Galaxy S51 Pro",
          display: {
            size: "7.2 inches",
            resolution: "3088x1440",
            type: "AMOLED",
          },
          processor: "Snapdragon 9 Gen 4",
          memory: {
            ram: "8GB",
            storage: "128GB",
          },
          camera: {
            rear: {
              resolution: "112MP",
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            front: {
              resolution: "40MP",
            },
          },
          battery: {
            capacity: "8000mAh",
            fastCharging: "45W Super Fast Charging",
          },
          operatingSystem: "Android 11",
          specialFeatures: [
            "Fingerprint sensor",
            "Water resistance (IP68)",
            "No expandable storage",
          ],
          image: "./images/samsungS51.jpeg"
        },
        samsungGalaxyPrime: {
          brand: "Samsung",
          model: "Galaxy Prime Ultra",
          display: {
            size: "7.4 inches",
            resolution: "3088x1440",
            type: "AMOLED",
          },
          processor: "Snapdragon 8 Gen 10",
          memory: {
            ram: "4GB",
            storage: "64GB",
          },
          camera: {
            rear: {
              resolution: "108MP",
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            front: {
              resolution: "40MP",
            },
          },
          battery: {
            capacity: "5000mAh",
            fastCharging: "45W Super Fast Charging",
          },
          operatingSystem: "Android 13",
          specialFeatures: [
            "Fingerprint sensor",
            "Water resistance (IP68)",
            "No expandable storage",
          ],
          image: "./images/samsungprime.jpeg"
        },
        samsungGalaxyS46: {
          brand: "Samsung",
          model: "Galaxy S46 Ultra",
          display: {
            size: "5.11 inches",
            resolution: "3088x1440",
            type: "AMOLED",
          },
          processor: "Snapdragon 8 Gen 2",
          memory: {
            ram: "6GB",
            storage: "64GB",
          },
          camera: {
            rear: {
              resolution: "108MP",
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            front: {
              resolution: "40MP",
            },
          },
          battery: {
            capacity: "20000mAh",
            fastCharging: "65W Super Fast Charging",
          },
          operatingSystem: "Android 14",
          specialFeatures: [
            "Fingerprint sensor",
            "Water resistance (IP68)",
            "No expandable storage",
          ],
          image: "./images/samsung46.jpeg"
        },
        samsungGalaxyS77: {
          brand: "Samsung",
          model: "Galaxy S77 Ultra",
          display: {
            size: "8.5 inches",
            resolution: "3088x1440",
            type: "AMOLED",
          },
          processor: "Snapdragon 12 Gen 24",
          memory: {
            ram: "12GB",
            storage: "512GB",
          },
          camera: {
            rear: {
              resolution: "158MP",
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            front: {
              resolution: "40MP",
            },
          },
          battery: {
            capacity: "20000mAh",
            fastCharging: "85W Super Fast Charging",
          },
          operatingSystem: "Android 14",
          specialFeatures: [
            "Fingerprint sensor",
            "Water resistance (IP68)",
            "Expandable storage",
          ],
          image: "./images/samsung77.jpeg"
        },
      
    },
    realme: {
        realmeNote50: {
            brand: "Realme",
            model: "Realme Note 50",
            display: {
                size: "6.5 inches",
                resolution: "FHD+ (1080 x 2400 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 1",
            memory: {
                ram: 8, // GB
                storage: 128, // GB
            },
            camera: {
                rear: {
                    main: 64, // MP
                    ultrawide: 8, // MP
                    macro: 2, // MP
                },
                front: 16, // MP
            },
            battery: {
                capacity: 5000, // mAh
                fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
            image: "./images/realmenote50.jpeg"
        },
        realmeC67: {
            brand: "Realme",
            model: "Realme C67",
            display: {
                size: "6.7 inches",
                resolution: "FHD+ (1280 x 2100 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 6 Gen 4",
            memory: {
                ram: 8, // GB
                storage: 256, // GB
            },
            camera: {
                rear: {
                    main: 64, // MP
                    ultrawide: 8, // MP
                    macro: 2, // MP
                },
                front: 14, // MP
            },
            battery: {
                capacity: 5000, // mAh
                fastCharging: "65W",
            },
            operatingSystem: "Android 11",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
            image: "./images/realme67.jpeg"
        },
        realmeC53: {
            brand: "Realme",
            model: "Realme C53",
            display: {
                size: "7.1 inches",
                resolution: "FHD+ (1180 x 2500 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 6",
            memory: {
                ram: 12, // GB
                storage: 128, // GB
            },
            camera: {
                rear: {
                    main: 64, // MP
                    ultrawide: 8, // MP
                    macro: 2, // MP
                },
                front: 18, // MP
            },
            battery: {
                capacity: 8000, // mAh
                fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
           image: "./images/realc53.jpeg"
        },
        realme9: {
            brand: "Realme",
            model: "Realme 9",
            display: {
                size: "7.2 inches",
                resolution: "FHD+ (1180 x 2200 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 9 Gen 6",
            memory: {
                ram: 12, // GB
                storage: 256, // GB
            },
            camera: {
                rear: {
                    main: 64, // MP
                    ultrawide: 8, // MP
                    macro: 2, // MP
                },
                front: 24, // MP
            },
            battery: {
                capacity: 10000, // mAh
                fastCharging: "75W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
            image: "./images/realme9.jpeg"
        },
        realme9i: {
            brand: "Realme",
            model: "Realme 9i",
            display: {
                size: "6.9 inches",
                resolution: "FHD+ (1480 x 2400 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 1",
            memory: {
                ram: 12, // GB
                storage: 512, // GB
            },
            camera: {
                rear: {
                    main: 64, // MP
                    ultrawide: 8, // MP
                    macro: 2, // MP
                },
                front: 16, // MP
            },
            battery: {
                capacity: 2000, // mAh
                fastCharging: "70W",
            },
            operatingSystem: "Android 13",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
          image: "./images/realme9i.png"
        },
    },
    
}
  
  function populateModels() {
    const brand = document.getElementById('brand').value;
    console.log(brand)
    const modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '<option value="">Select Model</option>'; 

    if (brand) {
        const models = Object.keys(mobiles[brand]);
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

function displayPhoneDetails() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const resultDiv = document.getElementById('result')
    
    if (brand && model) {
        const phone = mobiles[brand][model];
        resultDiv.style.display = "block";
        
        const phoneImage = phone.image || 'default_image.jpg'; 
        
        resultDiv.innerHTML = `
            <div class="phone-details">
                <div class="phone-image-container">
                    <img src="${phoneImage}" alt="${model} image" class="phone-image" />
                </div>
                <div class="phone-specs">
                    <h3>${brand} ${model}</h3>
                    <div class="spec"><strong>Processor:</strong> ${phone.processor}</div>
                    <div class="spec"><strong>RAM:</strong> ${phone.memory.ram}GB</div>
                    <div class="spec"><strong>Storage:</strong> ${phone.memory.storage}GB</div>
                    <div class="spec"><strong>Battery:</strong> ${phone.battery}mAh</div>
                    <div class="spec"><strong>Operating System:</strong> ${phone.operatingSystem}</div>
                    <div class="spec"><strong>Rear Camera:</strong> Main: ${phone.camera.rear.main}MP, Ultrawide: ${phone.camera.rear.ultrawide}MP, Telephoto: ${phone.camera.rear.telephoto}MP</div>
                    <div class="spec"><strong>Front Camera:</strong> ${phone.camera.front}MP</div>
                    <div class="spec"><strong>Special Features:</strong> ${phone.specialFeatures.join(", ")}</div>
                </div>
            </div>
        `;
    } else {
        resultDiv.innerHTML = "<p>Please select both a brand and a model.</p>";
    }
    
}
