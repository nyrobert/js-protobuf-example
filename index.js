/* jshint devel: true */

'use strict';

var message = require('./protocol_buffers/messages/person_pb');

var person = new message.Person();
person.setId(1);
person.setName('John Doe');
person.setEmail('john.doe@gmail.com');

var homePhone = new message.Person.PhoneNumber();
homePhone.setNumber('+36 20 111 2222');
homePhone.setType(message.Person.PhoneNumber.HOME);
person.addPhone(homePhone);

var workPhone = new message.Person.PhoneNumber();
workPhone.setNumber('+36 30 444 5555');
workPhone.setType(message.Person.PhoneNumber.WORK);
person.addPhone(workPhone);

var bytes   = person.serializeBinary();
var person2 = message.Person.deserializeBinary(bytes);

console.log(person2);
