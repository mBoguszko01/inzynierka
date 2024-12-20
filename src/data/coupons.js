const coupons = [
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 3.25,
        "expiration_date": "2024-12-12",
        "category": "Dry Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 8.69,
        "expiration_date": "2024-12-12",
        "category": "Dairy Products"
    },
    {
        "name": "Yellow cheese Gouda 150g",
        "manufacturer": "Hochland",
        "store": "Biedronka",
        "price_before_discount": 4.99,
        "price_after_discount": 4.12,
        "expiration_date": "2024-12-19",
        "category": "Dairy Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 9.1,
        "expiration_date": "2024-12-02",
        "category": "Dairy Products"
    },
    {
        "name": "Yellow cheese Gouda 150g",
        "manufacturer": "Hochland",
        "store": "Biedronka",
        "price_before_discount": 4.99,
        "price_after_discount": 4.29,
        "expiration_date": "2024-12-16",
        "category": "Dairy Products"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 2.91,
        "expiration_date": "2024-12-14",
        "category": "Dry Products"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 2.93,
        "expiration_date": "2024-12-08",
        "category": "Dry Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.72,
        "expiration_date": "2024-12-01",
        "category": "Dairy Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.66,
        "expiration_date": "2024-12-18",
        "category": "Dairy Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 6.91,
        "expiration_date": "2024-12-11",
        "category": "Dairy Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 6.86,
        "expiration_date": "2024-12-02",
        "category": "Dairy Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.95,
        "expiration_date": "2024-12-08",
        "category": "Dry Products"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 18.79,
        "expiration_date": "2024-12-21",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 3.19,
        "expiration_date": "2024-12-07",
        "category": "Dry Products"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 16.08,
        "expiration_date": "2024-11-30",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 18.26,
        "expiration_date": "2024-12-15",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 6.94,
        "expiration_date": "2024-11-30",
        "category": "Dairy Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.62,
        "expiration_date": "2024-12-03",
        "category": "Dairy Products"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.26,
        "expiration_date": "2024-12-21",
        "category": "Dairy Products"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.09,
        "expiration_date": "2024-12-13",
        "category": "Dairy Products"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.03,
        "expiration_date": "2024-12-16",
        "category": "Dairy Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 9.26,
        "expiration_date": "2024-12-17",
        "category": "Dairy Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 7.28,
        "expiration_date": "2024-12-09",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.93,
        "expiration_date": "2024-12-15",
        "category": "Dry Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 8.13,
        "expiration_date": "2024-12-08",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 7.27,
        "expiration_date": "2024-12-14",
        "category": "Dairy Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 9.11,
        "expiration_date": "2024-12-14",
        "category": "Dairy Products"
    },
    {
        "name": "Canned ham 300g",
        "manufacturer": "Sokołów",
        "store": "Lidl",
        "price_before_discount": 12.99,
        "price_after_discount": 10.64,
        "expiration_date": "2024-11-29",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.79,
        "expiration_date": "2024-12-11",
        "category": "Dairy Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 7.3,
        "expiration_date": "2024-12-03",
        "category": "Dairy Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 8.37,
        "expiration_date": "2024-12-17",
        "category": "Dairy Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 3.24,
        "expiration_date": "2024-11-30",
        "category": "Dry Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 6.58,
        "expiration_date": "2024-12-19",
        "category": "Dairy Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 6.81,
        "expiration_date": "2024-12-07",
        "category": "Dairy Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.87,
        "expiration_date": "2024-12-06",
        "category": "Dairy Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.95,
        "expiration_date": "2024-12-09",
        "category": "Dairy Products"
    },
    {
        "name": "Yellow cheese Gouda 150g",
        "manufacturer": "Hochland",
        "store": "Biedronka",
        "price_before_discount": 4.99,
        "price_after_discount": 4.61,
        "expiration_date": "2024-12-02",
        "category": "Dairy Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 8.1,
        "expiration_date": "2024-12-07",
        "category": "Dairy Products"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 2.95,
        "expiration_date": "2024-12-18",
        "category": "Dry Products"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.16,
        "expiration_date": "2024-12-06",
        "category": "Dairy Products"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.18,
        "expiration_date": "2024-12-17",
        "category": "Dairy Products"
    },
    {
        "name": "Canned ham 300g",
        "manufacturer": "Sokołów",
        "store": "Lidl",
        "price_before_discount": 12.99,
        "price_after_discount": 10.62,
        "expiration_date": "2024-12-01",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.88,
        "expiration_date": "2024-12-07",
        "category": "Dry Products"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 2.86,
        "expiration_date": "2024-12-10",
        "category": "Dry Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 8.48,
        "expiration_date": "2024-12-09",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 9.41,
        "expiration_date": "2024-12-14",
        "category": "Dairy Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 7.45,
        "expiration_date": "2024-12-10",
        "category": "Dairy Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.98,
        "expiration_date": "2024-12-18",
        "category": "Dry Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.58,
        "expiration_date": "2024-12-09",
        "category": "Dairy Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.56,
        "expiration_date": "2024-12-08",
        "category": "Dairy Products"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.27,
        "expiration_date": "2024-12-05",
        "category": "Dairy Products"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 18.6,
        "expiration_date": "2024-12-20",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 3.26,
        "expiration_date": "2024-12-02",
        "category": "Dry Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 7.51,
        "expiration_date": "2024-12-14",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 17.04,
        "expiration_date": "2024-12-12",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 18.62,
        "expiration_date": "2024-12-09",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.22,
        "expiration_date": "2024-12-21",
        "category": "Dairy Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 7.81,
        "expiration_date": "2024-12-13",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 3.24,
        "expiration_date": "2024-11-30",
        "category": "Dry Products"
    },
    {
        "name": "Yellow cheese Gouda 150g",
        "manufacturer": "Hochland",
        "store": "Biedronka",
        "price_before_discount": 4.99,
        "price_after_discount": 4.46,
        "expiration_date": "2024-11-29",
        "category": "Dairy Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 7.52,
        "expiration_date": "2024-12-10",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 8.02,
        "expiration_date": "2024-12-04",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 3.14,
        "expiration_date": "2024-12-13",
        "category": "Dry Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 7.42,
        "expiration_date": "2024-12-21",
        "category": "Dairy Products"
    },
    {
        "name": "Canned ham 300g",
        "manufacturer": "Sokołów",
        "store": "Lidl",
        "price_before_discount": 12.99,
        "price_after_discount": 11.11,
        "expiration_date": "2024-12-02",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.99,
        "expiration_date": "2024-12-08",
        "category": "Dairy Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 6.97,
        "expiration_date": "2024-12-04",
        "category": "Dairy Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 9.44,
        "expiration_date": "2024-12-06",
        "category": "Dairy Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.91,
        "expiration_date": "2024-12-20",
        "category": "Dry Products"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 8.92,
        "expiration_date": "2024-12-16",
        "category": "Dairy Products"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 18.66,
        "expiration_date": "2024-12-02",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 17.6,
        "expiration_date": "2024-12-06",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 8.93,
        "expiration_date": "2024-12-04",
        "category": "Dairy Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 3.3,
        "expiration_date": "2024-12-12",
        "category": "Dry Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 8.15,
        "expiration_date": "2024-12-05",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 16.21,
        "expiration_date": "2024-12-07",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.83,
        "expiration_date": "2024-12-06",
        "category": "Dry Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 3.21,
        "expiration_date": "2024-11-30",
        "category": "Dry Products"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 3.25,
        "expiration_date": "2024-12-17",
        "category": "Dry Products"
    },
    {
        "name": "Yellow cheese Gouda 150g",
        "manufacturer": "Hochland",
        "store": "Biedronka",
        "price_before_discount": 4.99,
        "price_after_discount": 4.66,
        "expiration_date": "2024-12-12",
        "category": "Dairy Products"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 18.9,
        "expiration_date": "2024-12-17",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Yellow cheese Gouda 150g",
        "manufacturer": "Hochland",
        "store": "Biedronka",
        "price_before_discount": 4.99,
        "price_after_discount": 4.29,
        "expiration_date": "2024-12-10",
        "category": "Dairy Products"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.69,
        "expiration_date": "2024-12-07",
        "category": "Dairy Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.9,
        "expiration_date": "2024-12-09",
        "category": "Dry Products"
    },
    {
        "name": "Extra Butter 200g",
        "manufacturer": "Mlekovita",
        "store": "Lidl",
        "price_before_discount": 7.99,
        "price_after_discount": 7.45,
        "expiration_date": "2024-11-30",
        "category": "Dairy Products"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 3.17,
        "expiration_date": "2024-12-20",
        "category": "Dry Products"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.34,
        "expiration_date": "2024-12-12",
        "category": "Dairy Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 7.57,
        "expiration_date": "2024-12-17",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Natural yogurt 400g",
        "manufacturer": "Bakoma",
        "store": "Biedronka",
        "price_before_discount": 2.49,
        "price_after_discount": 2.07,
        "expiration_date": "2024-12-15",
        "category": "Dairy Products"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 2.84,
        "expiration_date": "2024-12-12",
        "category": "Dry Products"
    },
    {
        "name": "Yellow cheese Gouda 150g",
        "manufacturer": "Hochland",
        "store": "Biedronka",
        "price_before_discount": 4.99,
        "price_after_discount": 4.31,
        "expiration_date": "2024-12-21",
        "category": "Dairy Products"
    },
    {
        "name": "Rapeseed oil 1L",
        "manufacturer": "Kruszwica",
        "store": "Carrefour",
        "price_before_discount": 8.99,
        "price_after_discount": 7.73,
        "expiration_date": "2024-12-03",
        "category": "Cooking Ingredients"
    },
    {
        "name": "Whole grain bread 500g",
        "manufacturer": "Piekarnia Putka",
        "store": "Lidl",
        "price_before_discount": 3.49,
        "price_after_discount": 2.8,
        "expiration_date": "2024-12-11",
        "category": "Dry Products"
    },
    {
        "name": "Canned ham 300g",
        "manufacturer": "Sokołów",
        "store": "Lidl",
        "price_before_discount": 12.99,
        "price_after_discount": 12.03,
        "expiration_date": "2024-12-16",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Canned ham 300g",
        "manufacturer": "Sokołów",
        "store": "Lidl",
        "price_before_discount": 12.99,
        "price_after_discount": 11.9,
        "expiration_date": "2024-12-01",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Milk 3.2% 1L",
        "manufacturer": "Mlekpol",
        "store": "Carrefour",
        "price_before_discount": 3.19,
        "price_after_discount": 2.75,
        "expiration_date": "2024-12-18",
        "category": "Dairy Products"
    },
    {
        "name": "Penne pasta 500g",
        "manufacturer": "Lubella",
        "store": "Biedronka",
        "price_before_discount": 3.49,
        "price_after_discount": 2.81,
        "expiration_date": "2024-12-06",
        "category": "Dry Products"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 18.02,
        "expiration_date": "2024-12-08",
        "category": "Meat and Cold Cuts"
    },
    {
        "name": "Free-range eggs 10 pcs",
        "manufacturer": "Fermy Drobiu Woźniak",
        "store": "Lidl",
        "price_before_discount": 9.99,
        "price_after_discount": 9.23,
        "expiration_date": "2024-12-11",
        "category": "Dairy Products"
    },
    {
        "name": "Chicken breast fillet 1kg",
        "manufacturer": "Drosed",
        "store": "Carrefour",
        "price_before_discount": 19.99,
        "price_after_discount": 17.12,
        "expiration_date": "2024-12-12",
        "category": "Meat and Cold Cuts"
    }
];
export default coupons;