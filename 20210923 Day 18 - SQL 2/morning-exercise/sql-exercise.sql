CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"phone_number" integer(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "pet_owner" (
	"owner_id" serial NOT NULL,
	"pet_name" varchar(255) NOT NULL,
	"pet_type" varchar(255) NOT NULL,
	"pet_instructions" TEXT(500) NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "pet_owner_pk" PRIMARY KEY ("owner_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "pet_sitter" (
	"sitter_id" serial NOT NULL,
	"experience" varchar(500) NOT NULL,
	"time_slots" DATE(20) NOT NULL,
	"rating" TEXT(250) NOT NULL,
	"hr_rate" FLOAT(10) NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "pet_sitter_pk" PRIMARY KEY ("sitter_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "pet_owner" ADD CONSTRAINT "pet_owner_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE "pet_sitter" ADD CONSTRAINT "pet_sitter_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");



