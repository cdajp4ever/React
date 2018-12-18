expo init $1
cd $1
yarn add -D typescript
yarn tsc --init --pretty --jsx react
yarn add -D @types/react @types/react-native
mv App.js App.tsx
yarn add -D tslint tslint-config-prettier tslint-config-standard tslint-react prettier
echo "{
    \"defaultSeverity\": \"error\",
    \"extends\": [
        \"tslint:recommended\",
        \"tslint-config-standard\",
        \"tslint-react\",
        \"tslint-config-prettier\"
    ],
    \"jsRules\": {},
    \"rules\": {
        \"ordered-imports\": false,
        \"object-literal-sort-keys\": false,
        \"member-ordering\": false,
        \"jsx-no-lambda\": false,
        \"jsx-boolean-value\": false,
        \"member-access\": [true, \"no-public\"],
        \"no-console\": false
    },
    \"rulesDirectory\": []
}" >> tslint.json
echo "{
    \"semi\": false,
    \"singleQuote\": true,
    \"trailingComma\": \"es5\"
}" >> .prettierrc

