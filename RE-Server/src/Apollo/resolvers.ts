import { ApolloError } from "apollo-server";
import { CreateToken } from "../Auth/AdminToken";
import { addData, deleteData, getData, updateData } from "../Mongodb/ListingModel";

const resolvers = {
  Query: {
    getlisting: async (parent: any, args: any, context: any) => {
      try {
        const data = await getData(args);
        return data;
      } catch (error) {
        throw new ApolloError("Iternal Server error");
      }
    },
  },
  Mutation: {
    login: async (parent: any, args: any, context: any) => {
      if (args.admin !== "admin") throw new ApolloError("Admin name invalid");
      if (args.password !== "admin1234") throw new ApolloError("Password invalid");
      const token = CreateToken({ admin: "admin", password: "admin1234" });
      if (!token) throw new ApolloError("Internal error");
      return { token };
    },
    addlisting: async (parent: any, args: any, context: any) => {
      if (!context.req.isAuth) throw new ApolloError("Not Authorize");
      try {
        await addData(args);
        return { message: "add list successfuly" };
      } catch (error) {
        throw new ApolloError("add not successful");
      }
    },
    updatelisting: async (parent: any, args: any, context: any) => {
      if (!context.req.isAuth) throw new ApolloError("Not Authorize");
      try {
        await updateData(args);
        return { message: "update list successfuly" };
      } catch (error) {
        throw new ApolloError("update not successful");
      }
    },
    deletelisting: async (parent: any, args: any, context: any) => {
      if (!context.req.isAuth) throw new ApolloError("Not Authorize");
      try {
        await deleteData(args);
        return { message: "delete list successfuly" };
      } catch (error) {
        throw new ApolloError("delete not successful");
      }
    },
  },
};

export default resolvers;
