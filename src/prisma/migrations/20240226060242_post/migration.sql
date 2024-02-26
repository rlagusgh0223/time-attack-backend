-- AlterTable
CREATE SEQUENCE post_tweetsid_seq;
ALTER TABLE "Post" ALTER COLUMN "tweetsId" SET DEFAULT nextval('post_tweetsid_seq');
ALTER SEQUENCE post_tweetsid_seq OWNED BY "Post"."tweetsId";
