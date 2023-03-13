const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Query {
        university(alpha_two_code: String!): University
        universities(country: String): [University]
    }
    type University {
        alpha_two_code: String
        name: String
        state_province: String
        web_pages: String
        country: String
    }
`);

const universityData = [
    {
        name: 'Cape Peninsula University of Technology',
        state_province : 'Western Cape Province',
        web_pages: 'http://www.cput.ac.za/',
        country: 'South Africa',
        alpha_two_code: 'ZA'
    },
    {
        name: 'Central University of Technology',
        state_province : 'Free State Province',
        web_pages: 'cut.ac.za',
        country: 'South Africa',
        alpha_two_code: 'ZA'
    },
    {
        name: 'Durban University of Technology',
        state_province : 'KwaZulu-Natal',
        web_pages: 'dut.ac.za',
        country: 'South Africa',
        alpha_two_code: 'ZA'
    },
    {
        name: 'Nelson Mandela University',
        state_province : 'Eastern Cape Province',
        web_pages: 'http://www.mandela.ac.za/', 
        country: 'South Africa',
        alpha_two_code: 'ZA'
    },
    {
        name: 'Rhodes University',
        state_province : 'Eastern Cape Province',
        web_pages: 'ru.ac.za',
        country: 'South Africa',
        alpha_two_code: 'ZA'
    }
]

const getUniversity = function(args) {
    const alpha_two_code = args.alpha_two_code;
    return universityData.filter(university => {
        return university.alpha_two_code = alpha_two_code;
    })[0];
}

const getUniversities = function(args){
    if(args.country){
        const country = args.country;
        return universityData.filter(university => university.country === country);
    } else {
        return universityData;
    }
}

const root = {
    university: getUniversity,
    universities: getUniversities
}

const app = express();
app.use('/search', expressGraphQL({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Server now running...'))