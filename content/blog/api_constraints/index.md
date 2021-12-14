---
title: 6 Constraints for REST APIs.
date: "2021-12-01T22:12:03.284Z"
description: "An overview of the REST API Constraints for a RESTful System"
---


##6 Constraints for REST APIs.

REST stands for Representational State Transfer. A RESTful API means that it is using the HTTP request to GET, POST, PUT and DELETE data. REST is a software architectural style that was made to guide the development of the internet. 
There are 6 constraints when it comes to APIS, which define what it means to be RESTful.


The first constrain is having a uniform interface. Within this, there are 4 guidelines of what it means to have a uniform interface. First, it needs to be resource based which means individual resources are identified in the request that is being made. Next is that is there can be a manipulation of resources through representations, or how the resource will be returned to the client. There also needs to be self-descriptive messages that message includes enough information to describe how to process the message so that server can easily analyses the request. And last but not least, Hypermedia as the Engine of Application State or HATEOAS. This is a general idea that means the server has the power to control the flow of your application by not allowing the user to know what is next until the server guides it. 


The second constraint is that a RESTful API is stateless. This means that any state needed to handle the request would need to be contained inside of the request itself and there would not be anything stored within the session.  Each request is independent and has no relocation of any past requests. 


The third constraint is that is it cacheable. Being cacheable allows the user to return any information that is stored in their cache for any following request, thus eliminating the need to send the request to the server.  In the end, this should help increase performance and decrease any unnecessary processing of information. 


The fourth constraint is that it has a client-server architecture. This architecture means that there as a separation between the client and the server. The user should not have to worry about data storage and the server should not have to worry about user interface or state.  This allows each part of the API to grow independently and as needed. 


The fifth constraint is a layered architecture system. Each layer has a different unit of functionality and a separation of concerns throughout. There are no specifications to the number of layers that must exist, but there are 4 standard layers (presentation, business, persistence, and database). Data then flows from one layer to another, only able to communicate to the layer underneath it.
The sixth and final constraint, that is considered to be optional, is code on demand. This allows the user to have access to some of the server logic, typically through scripts. This would allow custom requests for different users even if the API provides one service.  


These constraints are non-negotiable, and I hope this post helped provide some clarity about each constraint along the way. As always, feel free to reach out to me with any questions, concerns, or just to connect via LinkedIn or GitHub! Both linked below! 
