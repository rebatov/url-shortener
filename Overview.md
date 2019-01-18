# Overview

## A list of any security issues in the solution, and how it would be fixed.
* Added the pre check for existing URL so that there will not be repitition of the same url with multiple short url codes.
* Disabled the 'x-powered-by' header so attackers cannot casually know if it is running on express.
* Later on we need to use 'helmet' to be a bit more secure as it will mitigate some well-known web vulnerabilities by setting HTTP headers appropriately.
* And we could limit the request from a single user for potential DoS.
## A list of any scalability issues in the solution, and how it would be fixed.
* We could use cluster mechanism for proper balancing of the load.
* We could use session to maintain uniqueness of the stored url.
* We could use some kind of analytics to monitor the number of hits, requesting agent, etc. whenever the short url is accessed for better data analytics in the future.
* We could use microservice architecture when the services get bigger and containerized approach will be helpful for truly CloudNative deployments.

## References
* https://github.com/dylang/shortid
* https://dzone.com/articles/how-to-build-a-url-shortener-with-nodejs-and-mongo
* https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener/742047#742047