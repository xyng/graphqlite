"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8060],{56070:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"4.3","label":"4.3","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-4.3","isLast":false,"docsSidebars":{"version-4.3/docs":[{"type":"category","collapsed":true,"collapsible":true,"label":"Introduction","items":[{"type":"link","label":"GraphQLite","href":"/docs/4.3/","docId":"index"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Installation","items":[{"type":"link","label":"Getting Started","href":"/docs/4.3/getting-started","docId":"getting-started"},{"type":"link","label":"Symfony bundle","href":"/docs/4.3/symfony-bundle","docId":"symfony-bundle"},{"type":"link","label":"Laravel package","href":"/docs/4.3/laravel-package","docId":"laravel-package"},{"type":"link","label":"Universal service providers","href":"/docs/4.3/universal-service-providers","docId":"universal-service-providers"},{"type":"link","label":"Other frameworks / No framework","href":"/docs/4.3/other-frameworks","docId":"other-frameworks"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Usage","items":[{"type":"link","label":"Queries","href":"/docs/4.3/queries","docId":"queries"},{"type":"link","label":"Mutations","href":"/docs/4.3/mutations","docId":"mutations"},{"type":"link","label":"Type mapping","href":"/docs/4.3/type-mapping","docId":"type-mapping"},{"type":"link","label":"Autowiring services","href":"/docs/4.3/autowiring","docId":"autowiring"},{"type":"link","label":"Extending a type","href":"/docs/4.3/extend-type","docId":"extend-type"},{"type":"link","label":"External type declaration","href":"/docs/4.3/external-type-declaration","docId":"external-type-declaration"},{"type":"link","label":"Input types","href":"/docs/4.3/input-types","docId":"input-types"},{"type":"link","label":"Inheritance and interfaces","href":"/docs/4.3/inheritance-interfaces","docId":"inheritance-interfaces"},{"type":"link","label":"Error handling","href":"/docs/4.3/error-handling","docId":"error-handling"},{"type":"link","label":"User input validation","href":"/docs/4.3/validation","docId":"validation"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Security","items":[{"type":"link","label":"Authentication and authorization","href":"/docs/4.3/authentication-authorization","docId":"authentication-authorization"},{"type":"link","label":"Fine grained security","href":"/docs/4.3/fine-grained-security","docId":"fine-grained-security"},{"type":"link","label":"Connecting security to your framework","href":"/docs/4.3/implementing-security","docId":"implementing-security"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Performance","items":[{"type":"link","label":"Query plan","href":"/docs/4.3/query-plan","docId":"query-plan"},{"type":"link","label":"Prefetching records","href":"/docs/4.3/prefetch-method","docId":"prefetch-method"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Advanced","items":[{"type":"link","label":"File uploads","href":"/docs/4.3/file-uploads","docId":"file-uploads"},{"type":"link","label":"Pagination","href":"/docs/4.3/pagination","docId":"pagination"},{"type":"link","label":"Custom types","href":"/docs/4.3/custom-types","docId":"custom-types"},{"type":"link","label":"Custom annotations","href":"/docs/4.3/field-middlewares","docId":"field-middlewares"},{"type":"link","label":"Custom argument resolving","href":"/docs/4.3/argument-resolving","docId":"argument-resolving"},{"type":"link","label":"Extending an input type","href":"/docs/4.3/extend-input-type","docId":"extend-input-type"},{"type":"link","label":"Class with multiple output types","href":"/docs/4.3/multiple-output-types","docId":"multiple-output-types"},{"type":"link","label":"Symfony specific features","href":"/docs/4.3/symfony-bundle-advanced","docId":"symfony-bundle-advanced"},{"type":"link","label":"Laravel specific features","href":"/docs/4.3/laravel-package-advanced","docId":"laravel-package-advanced"},{"type":"link","label":"Internals","href":"/docs/4.3/internals","docId":"internals"},{"type":"link","label":"Troubleshooting","href":"/docs/4.3/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"Migrating","href":"/docs/4.3/migrating","docId":"migrating"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Reference","items":[{"type":"link","label":"Annotations VS Attributes","href":"/docs/4.3/doctrine-annotations-attributes","docId":"doctrine-annotations-attributes"},{"type":"link","label":"Annotations reference","href":"/docs/4.3/annotations-reference","docId":"annotations-reference"},{"type":"link","label":"Semantic versioning","href":"/docs/4.3/semver","docId":"semver"},{"type":"link","label":"Changelog","href":"/docs/4.3/changelog","docId":"changelog"}]}]},"docs":{"annotations-reference":{"id":"annotations-reference","title":"Annotations reference","description":"Note: all annotations are available both in a Doctrine annotation format (@Query) and in PHP 8 attribute format (#[Query]).","sidebar":"version-4.3/docs"},"argument-resolving":{"id":"argument-resolving","title":"Extending argument resolving","description":"Available in GraphQLite 4.0+","sidebar":"version-4.3/docs"},"authentication-authorization":{"id":"authentication-authorization","title":"Authentication and authorization","description":"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields","sidebar":"version-4.3/docs"},"autowiring":{"id":"autowiring","title":"Autowiring services","description":"GraphQLite can automatically inject services in your fields/queries/mutations signatures.","sidebar":"version-4.3/docs"},"changelog":{"id":"changelog","title":"Changelog","description":"4.3.0","sidebar":"version-4.3/docs"},"custom-types":{"id":"custom-types","title":"Custom types","description":"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite.","sidebar":"version-4.3/docs"},"doctrine-annotations-attributes":{"id":"doctrine-annotations-attributes","title":"Doctrine annotations VS PHP8 attributes","description":"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).","sidebar":"version-4.3/docs"},"error-handling":{"id":"error-handling","title":"Error handling","description":"In GraphQL, when an error occurs, the server must add an \\"error\\" entry in the response.","sidebar":"version-4.3/docs"},"extend-input-type":{"id":"extend-input-type","title":"Extending an input type","description":"Available in GraphQLite 4.0+","sidebar":"version-4.3/docs"},"extend-type":{"id":"extend-type","title":"Extending a type","description":"Fields exposed in a GraphQL type do not need to be all part of the same class.","sidebar":"version-4.3/docs"},"external-type-declaration":{"id":"external-type-declaration","title":"External type declaration","description":"In some cases, you cannot or do not want to put an annotation on a domain class.","sidebar":"version-4.3/docs"},"field-middlewares":{"id":"field-middlewares","title":"Adding custom annotations with Field middlewares","description":"Available in GraphQLite 4.0+","sidebar":"version-4.3/docs"},"file-uploads":{"id":"file-uploads","title":"File uploads","description":"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed","sidebar":"version-4.3/docs"},"fine-grained-security":{"id":"fine-grained-security","title":"Fine grained security","description":"If the @Logged and @Right annotations are not","sidebar":"version-4.3/docs"},"getting-started":{"id":"getting-started","title":"Getting started","description":"GraphQLite is a framework agnostic library. You can use it in any PHP project as long as you know how to","sidebar":"version-4.3/docs"},"implementing-security":{"id":"implementing-security","title":"Connecting GraphQLite to your framework\'s security module","description":"At the time of writing, the Symfony Bundle and the Laravel package handle this implementation. For the latest documentation, please see their respective Github repositories.","sidebar":"version-4.3/docs"},"index":{"id":"index","title":"GraphQLite","description":"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.","sidebar":"version-4.3/docs"},"inheritance-interfaces":{"id":"inheritance-interfaces","title":"Inheritance and interfaces","description":"Modeling inheritance","sidebar":"version-4.3/docs"},"input-types":{"id":"input-types","title":"Input types","description":"Let\'s assume you are developing an API that returns a list of cities around a location.","sidebar":"version-4.3/docs"},"internals":{"id":"internals","title":"Internals","description":"Mapping types","sidebar":"version-4.3/docs"},"laravel-package":{"id":"laravel-package","title":"Getting started with Laravel","description":"Be advised! This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the Github repository.","sidebar":"version-4.3/docs"},"laravel-package-advanced":{"id":"laravel-package-advanced","title":"Laravel package: advanced usage","description":"Be advised! This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the Github repository.","sidebar":"version-4.3/docs"},"migrating":{"id":"migrating","title":"Migrating","description":"Migrating from v4.0 to v4.1","sidebar":"version-4.3/docs"},"multiple-output-types":{"id":"multiple-output-types","title":"Mapping multiple output types for the same class","description":"Available in GraphQLite 4.0+","sidebar":"version-4.3/docs"},"mutations":{"id":"mutations","title":"Mutations","description":"In GraphQLite, mutations are created like queries.","sidebar":"version-4.3/docs"},"other-frameworks":{"id":"other-frameworks","title":"Getting started with any framework","description":"Installation","sidebar":"version-4.3/docs"},"pagination":{"id":"pagination","title":"Paginating large result sets","description":"It is quite common to have to paginate over large result sets.","sidebar":"version-4.3/docs"},"prefetch-method":{"id":"prefetch-method","title":"Prefetching records","description":"The problem","sidebar":"version-4.3/docs"},"queries":{"id":"queries","title":"Queries","description":"In GraphQLite, GraphQL queries are created by writing methods in controller classes.","sidebar":"version-4.3/docs"},"query-plan":{"id":"query-plan","title":"Query plan","description":"The problem","sidebar":"version-4.3/docs"},"semver":{"id":"semver","title":"Our backward compatibility promise","description":"Ensuring smooth upgrades of your project is a priority. That\'s why we promise you backward compatibility (BC) for all minor GraphQLite releases. You probably recognize this strategy as Semantic Versioning. In short, Semantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility. Minor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of that release branch (4.x in the previous example).","sidebar":"version-4.3/docs"},"symfony-bundle":{"id":"symfony-bundle","title":"Getting started with Symfony","description":"Be advised! This documentation will be removed in a future release.  For current and up-to-date Symfony bundle specific documentation, please see the Github repository.","sidebar":"version-4.3/docs"},"symfony-bundle-advanced":{"id":"symfony-bundle-advanced","title":"Symfony bundle: advanced usage","description":"Be advised! This documentation will be removed in a future release.  For current and up-to-date Symfony bundle specific documentation, please see the Github repository.","sidebar":"version-4.3/docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Error: Maximum function nesting level of \'100\' reached","sidebar":"version-4.3/docs"},"type-mapping":{"id":"type-mapping","title":"Type mapping","description":"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.","sidebar":"version-4.3/docs"},"universal-service-providers":{"id":"universal-service-providers","title":"Getting started with a framework compatible with container-interop/service-provider","description":"container-interop/service-provider is an experimental project","sidebar":"version-4.3/docs"},"validation":{"id":"validation","title":"Validation","description":"GraphQLite does not handle user input validation by itself. It is out of its scope.","sidebar":"version-4.3/docs"}}}')}}]);