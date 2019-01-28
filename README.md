# Table of Contents

1.[Introduction](#introduction)

2.[Set Up](#set-up)

3.[Objectives and Instruction](#objectives-and-instructions)

# Introduction

This database API was created during my time as student at Code Chrysalis. In hopes of creating a database API that can contribute to better world where nobody needs to fight over finding toilet in Tokyo, this database is collection of convinience stores with toilet in Tokyo.

# Set-up

Postgres

You will need postgres installed. If you haven't installed it already, download and install the PostgresApp and verify its working by running the command psql in your terminal.

Create a database for this project by running:

    echo "CREATE DATABASE convini;" | psql

Installing Dependencies and Startup
Example:

To install dependencies:

    yarn
To run migrations and set up the database:

    yarn migrate:latest
To roll back migrations

    yarn rollback

To seed initial data:

    yarn seed:run

To run the app:

    yarn start

# Objectives and Instructions

The objective is to have as many convenience stores registered as possible. Also, our future direction is to make accessible information about other services such as cafe, wifi, copy, fax machine and etc.