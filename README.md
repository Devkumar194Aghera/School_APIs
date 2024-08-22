# SCHOOL API ENDPOINTS

## Add a School Data

### Endpoint: /addSchool
### Method: POST

## Payload
```
{
    "name": "School Name",
    "address": "School Address",
    "latitude": school_latitude,
    "longitude": school_longitude
}
```

## Functionality:

### Validates the input data:
#### name: Non-empty string
#### address: Non-empty string
#### latitude: Float (valid geographic coordinate)
#### longitude: Float (valid geographic coordinate)
#### Adds a new school to the schools table.


## Example Request:
``` 
url : localhost:3000/addSchool

body : {
    "name" : "Indian Institute of Technology Delhi",
    "address":"Delhi, India",
    "latitude": 28.5491,
    "longitude": 77.1710
}
```

## Example Response:

### Status Code: 201 CREATED


```
{
    "data": {
        "id": 15,
        "name": "Indian Institute of Technology Delhi",
        "address": "Delhi, India",
        "latitude": 28.5491,
        "longitude": 77.171,
        "updatedAt": "2024-08-22T15:50:39.256Z",
        "createdAt": "2024-08-22T15:50:39.256Z"
    },
    "success": true,
    "message": "Successfully added the school ",
    "err": {}
}
```

## List the School Data

### Endpoint: /listSchools
### Method: GET

## Payload
```
{
    "latitude": school_latitude,
    "longitude": school_longitude
}
```

## Functionality:

### Validates the input data:

#### latitude: Non-empty Float (valid geographic coordinate)
#### longitude: Non-empty Float (valid geographic coordinate)


## Example Request:
``` 
url : localhost:3000/addSchool

body : {
    "latitude": 79.029773,
    "longitude": 20.949516
}
```

## Example Response:

### Status Code: 200 OK


```
{
    "data": [
        {
            "id": 14,
            "name": "Indian Institute of Technology Delhi",
            "distance": 865.581412082202
        },
        {
            "id": 7,
            "name": "National University of Singapore",
            "distance": 3461.328891542475
        },
        {
            "id": 9,
            "name": "Peking University",
            "distance": 4108.960840958063
        },
        {
            "id": 10,
            "name": "Lomonosov Moscow State University",
            "distance": 5160.459244276162
        },
        {
            "id": 3,
            "name": "University of Tokyo",
            "distance": 6070.037113520497
        },
        {
            "id": 6,
            "name": "ETH Zurich",
            "distance": 6859.072306940569
        },
        {
            "id": 12,
            "name": "Sorbonne University",
            "distance": 7310.256855958572
        },
        {
            "id": 2,
            "name": "University of Oxford",
            "distance": 7535.392678452494
        },
        {
            "id": 5,
            "name": "University of Cape Town",
            "distance": 8848.642309661507
        },
        {
            "id": 4,
            "name": "University of Sydney",
            "distance": 9764.326693207911
        },
        {
            "id": 1,
            "name": "Harvard University",
            "distance": 12335.740923153728
        },
        {
            "id": 11,
            "name": "University of Toronto",
            "distance": 12500.6317821075
        },
        {
            "id": 8,
            "name": "University of São Paulo",
            "distance": 14458.659070302323
        },
        {
            "id": 13,
            "name": "University of Buenos Aires",
            "distance": 15595.510073819938
        }
    ],
    "success": true,
    "message": "Successfully list the schools ",
    "err": {}
}
```


