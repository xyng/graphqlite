"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6729],{19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>T});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),s=t(57485),u=t(31682),p=t(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function d(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,u]=h({queryString:t,groupId:n}),[c,m]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),y=(()=>{const e=s??c;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var y=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==o&&(c(a),s(n))},g=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>p.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===a})}),t??a)})))}function b(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=m(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(v,(0,n.A)({},e,a)),r.createElement(b,(0,n.A)({},e,a)))}function T(e){const a=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(a)},e))}},40470:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=t(58168),r=(t(96540),t(15680)),l=(t(67443),t(11470)),i=t(19365);const o={id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features"},s=void 0,u={unversionedId:"laravel-package-advanced",id:"version-7.0.0/laravel-package-advanced",title:"Laravel package: advanced usage",description:"Be advised! This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the Github repository.",source:"@site/versioned_docs/version-7.0.0/laravel-package-advanced.mdx",sourceDirName:".",slug:"/laravel-package-advanced",permalink:"/docs/laravel-package-advanced",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-7.0.0/laravel-package-advanced.mdx",tags:[],version:"7.0.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1718658906,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features"},sidebar:"docs",previous:{title:"Symfony specific features",permalink:"/docs/symfony-bundle-advanced"},next:{title:"Internals",permalink:"/docs/internals"}},p={},c=[{value:"Support for Laravel validation rules",id:"support-for-laravel-validation-rules",level:2},{value:"Support for pagination",id:"support-for-pagination",level:2},{value:"Simple paginator",id:"simple-paginator",level:3},{value:"Using GraphQLite with Eloquent efficiently",id:"using-graphqlite-with-eloquent-efficiently",level:2},{value:"Pitfalls to avoid with Eloquent",id:"pitfalls-to-avoid-with-eloquent",level:3},{value:"Export the schema from the CLI",id:"export-the-schema-from-the-cli",level:2}],d={toc:c},g="wrapper";function h(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("div",{class:"alert alert--warning"},(0,r.yg)("strong",null,"Be advised!")," This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the ",(0,r.yg)("a",{href:"https://github.com/thecodingmachine/graphqlite-laravel"},"Github repository"),"."),(0,r.yg)("p",null,"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel."),(0,r.yg)("h2",{id:"support-for-laravel-validation-rules"},"Support for Laravel validation rules"),(0,r.yg)("p",null,"The GraphQLite Laravel package comes with a special ",(0,r.yg)("inlineCode",{parentName:"p"},"@Validate")," annotation to use Laravel validation rules in your\ninput types."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    #[Mutation]\n    public function createUser(\n            #[Validate("email|unique:users")]\n            string $email,\n            #[Validate("gte:8")]\n            string $password\n        ): User\n    {\n        // ...\n    }\n}\n'))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    /**\n     * @Mutation\n     * @Validate(for="$email", rule="email|unique:users")\n     * @Validate(for="$password", rule="gte:8")\n     */\n    public function createUser(string $email, string $password): User\n    {\n        // ...\n    }\n}\n')))),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"@Validate")," annotation in any query / mutation / field / factory / decorator."),(0,r.yg)("p",null,'If a validation fails to pass, the message will be printed in the "errors" section and you will get a HTTP 400 status code:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "message": "The email must be a valid email address.",\n            "extensions": {\n                "argument": "email",\n                "category": "Validate"\n            }\n        },\n        {\n            "message": "The password must be greater than or equal 8 characters.",\n            "extensions": {\n                "argument": "password",\n                "category": "Validate"\n            }\n        }\n    ]\n}\n')),(0,r.yg)("p",null,"You can use any validation rule described in ",(0,r.yg)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/validation#available-validation-rules"},"the Laravel documentation")),(0,r.yg)("h2",{id:"support-for-pagination"},"Support for pagination"),(0,r.yg)("p",null,"In your query, if you explicitly return an object that extends the ",(0,r.yg)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\LengthAwarePaginator"),' class,\nthe query result will be wrapped in a "paginator" type.'),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n")))),(0,r.yg)("p",null,"Notice that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the method return type MUST BE ",(0,r.yg)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")," or a class extending ",(0,r.yg)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")),(0,r.yg)("li",{parentName:"ul"},"you MUST add a ",(0,r.yg)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,r.yg)("p",null,"Once this is done, you can get plenty of useful information about this page:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},'products {\n    items {      # The items for the selected page\n        id\n        name\n    }\n    totalCount   # The total count of items.\n    lastPage     # Get the page number of the last available page.\n    firstItem    # Get the "index" of the first item being paginated.\n    lastItem     # Get the "index" of the last item being paginated.\n    hasMorePages # Determine if there are more items in the data source.\n    perPage      # Get the number of items shown per page.\n    hasPages     # Determine if there are enough items to split into multiple pages.\n    currentPage  # Determine the current page being paginated.\n    isEmpty      # Determine if the list of items is empty or not.\n    isNotEmpty   # Determine if the list of items is not empty.\n}\n')),(0,r.yg)("div",{class:"alert alert--warning"},"Be sure to type hint on the class (",(0,r.yg)("code",null,"Illuminate\\Pagination\\LengthAwarePaginator"),") and not on the interface (",(0,r.yg)("code",null,"Illuminate\\Contracts\\Pagination\\LengthAwarePaginator"),"). The interface itself is not iterable (it does not extend ",(0,r.yg)("code",null,"Traversable"),") and therefore, GraphQLite will refuse to iterate over it."),(0,r.yg)("h3",{id:"simple-paginator"},"Simple paginator"),(0,r.yg)("p",null,"Note: if you are using ",(0,r.yg)("inlineCode",{parentName:"p"},"simplePaginate")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"paginate"),", you can type hint on the ",(0,r.yg)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\Paginator")," class."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n")))),(0,r.yg)("p",null,"The behaviour will be exactly the same except you will be missing the ",(0,r.yg)("inlineCode",{parentName:"p"},"totalCount")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"lastPage")," fields."),(0,r.yg)("h2",{id:"using-graphqlite-with-eloquent-efficiently"},"Using GraphQLite with Eloquent efficiently"),(0,r.yg)("p",null,"In GraphQLite, you are supposed to put a ",(0,r.yg)("inlineCode",{parentName:"p"},"@Field")," annotation on each getter."),(0,r.yg)("p",null,"Eloquent uses PHP magic properties to expose your database records.\nBecause Eloquent relies on magic properties, it is quite rare for an Eloquent model to have proper getters and setters."),(0,r.yg)("p",null,"So we need to find a workaround. GraphQLite comes with a ",(0,r.yg)("inlineCode",{parentName:"p"},"@MagicField")," annotation to help you\nworking with magic properties."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'#[Type]\n#[MagicField(name: "id", outputType: "ID!")]\n#[MagicField(name: "name", phpType: "string")]\n#[MagicField(name: "categories", phpType: "Category[]")]\nclass Product extends Model\n{\n}\n'))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type()\n * @MagicField(name="id", outputType="ID!")\n * @MagicField(name="name", phpType="string")\n * @MagicField(name="categories", phpType="Category[]")\n */\nclass Product extends Model\n{\n}\n')))),(0,r.yg)("p",null,'Please note that since the properties are "magic", they don\'t have a type. Therefore,\nyou need to pass either the "outputType" attribute with the GraphQL type matching the property,\nor the "phpType" attribute with the PHP type matching the property.'),(0,r.yg)("h3",{id:"pitfalls-to-avoid-with-eloquent"},"Pitfalls to avoid with Eloquent"),(0,r.yg)("p",null,"When designing relationships in Eloquent, you write a method to expose that relationship this way:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n     * Get the phone record associated with the user.\n     */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n")),(0,r.yg)("p",null,"It would be tempting to put a ",(0,r.yg)("inlineCode",{parentName:"p"},"@Field")," annotation on the ",(0,r.yg)("inlineCode",{parentName:"p"},"phone()")," method, but this will not work. Indeed,\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"phone()")," method does not return a ",(0,r.yg)("inlineCode",{parentName:"p"},"App\\Phone")," object. It is the ",(0,r.yg)("inlineCode",{parentName:"p"},"phone")," magic property that returns it."),(0,r.yg)("p",null,"In short:"),(0,r.yg)("div",{class:"alert alert--danger"},"This does not work:",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n    * @Field\n    */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n"))),(0,r.yg)("div",{class:"alert alert--success"},"This works:",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @MagicField(name="phone", phpType="App\\\\Phone")\n */\nclass User extends Model\n{\n    public function phone()\n    {\n        return $this->hasOne(\'App\\Phone\');\n    }\n}\n'))),(0,r.yg)("h2",{id:"export-the-schema-from-the-cli"},"Export the schema from the CLI"),(0,r.yg)("p",null,"The extension comes with a special command: ",(0,r.yg)("inlineCode",{parentName:"p"},"graphqlite:export-schema"),"."),(0,r.yg)("p",null,"Usage:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ ./artisan graphqlite:export-schema --output=schema.graphql\n")),(0,r.yg)("p",null,"This will export your GraphQL schema in SDL format. You can use this exported schema to import it in other\ntools (like graphql-codegen)."))}h.isMDXComponent=!0}}]);