select "line1",
        "city"."name" as "city",
        "district",
        "countries"."name" as "country"
    from "addresses"
    join "cities" as "city" using ("cityId")
    join "countries" using ("countryId");