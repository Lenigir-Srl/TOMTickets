# risto89

The best restaurant all over Arezzo

### Testo consegna

Il testo per la consegna può essere trovato in [Testo](Testo_Progetto.pdf)

---

The following text contains most of the commands and operations I've done to build this project.

## Downloading Maven

Maven is a program that helps with configuring and managing projects.
I downloaded the latest release from the [official website](https://maven.apache.org/download.cgi) and unpacked it.

Check that everything works

```bash
./apache-maven-3.9.6/bin/mvn -v
```

## Creating a project from an archetype

You can schoose an [archetype](https://maven.apache.org/archetypes/index.html) to get started, It's basically a template
I choose [maven-archetype-j2ee-simple](https://maven.apache.org/archetypes/maven-archetype-j2ee-simple/) as It's the closest to a servlet program.

Install the servlet by running:
```bash
mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-j2ee-simple -DarchetypeVersion=1.4
```

I inserted those settings:
```
Define value for property 'groupId': com.unitn.app
Define value for property 'artifactId': my-app
Define value for property 'version' 1.0-SNAPSHOT: : 1.0
Define value for property 'package' com.unitn.app: : 1.0
```

I deleted everything soutside `servlets/servlet` as It's just garbage

I changed the pom.xml file with the following:
```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.unitn.app</groupId>
  <artifactId>servlet</artifactId>
  <version>1.0</version>
  <packaging>war</packaging>

  <name>servlet</name>

</project>
```

## Building


You can build the project with this command:
```bash
./apache-maven-3.9.6/bin/mvn package
```

# Developement

Each servlet must be congifured in web.xml

## Add a dependency to mavel
You can find packages [here](https://mvnrepository.com/)
```xml
<dependencies>
    ...
    <dependency>
        <groupId>com.stackoverflow...</groupId>
        <artifactId>artifactId...</artifactId>
        <version>1.0</version>
    </dependency>
    ...
</dependencies>

```
