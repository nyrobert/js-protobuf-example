# JavaScript protocol buffer example

Simple protocol buffer example written in JavaScript.

## Requirements

* Node.js
* protoc

## Usage

First you have to generate the JavaScript classes from the `.proto` file:

```shell
  protoc \
    --proto_path=protocol_buffers/definitions \
    --js_out=import_style=commonjs,binary:protocol_buffers/messages \
    protocol_buffers/definitions/person.proto
```

Now you can use the generated setters, getters and methods for the serialization. Run `index.js` for the example.

```shell
  node index.js
```

## Testing

Run JSHint checks:

```shell
  docker-compose run js-tools jshint index.js
```

Run JSCS checks:

```shell
  docker-compose run js-tools jscs index.js
```

## License

This project is licensed under the terms of the [MIT License (MIT)](LICENSE).
