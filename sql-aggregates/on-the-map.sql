select "countries"."name" as "country",
        count("cities"."name") as "cities per country"
    from "cities"
    join "countries" using ("countryId")
    group by "countries"."name";