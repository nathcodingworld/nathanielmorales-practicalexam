import Listing from "./Listing";

export async function addData(args: any) {
  const pricetag = args.price > 1000000 ? "Greater than $1000K" : args.price < 500000 ? "Less than $500K" : "$500K to $1000K";
  const newlisting = await new Listing({
    housename: args.housename,
    title: args.title,
    type: args.type,
    location: args.location,
    description: args.description,
    url: args.url,
    ref: args.ref,
    bed: args.bed,
    bath: args.bath,
    park: args.park,
    garden: args.garden,
    price: args.price,
    date: args.date,
    pricetag: pricetag,
  });
  const data = await newlisting.save();
  return data;
}

export async function getData(args: any) {
  return await Listing.find({ title: args.title, type: args.type, location: args.location, pricetag: args.pricetag });
}

export async function getOneData(args: { id: string }) {
  return await Listing.findById(args.id);
}

export async function deleteData(args: { id: string }) {
  await Listing.findByIdAndDelete(args.id);
}

export async function updateData(args: any) {
  const pricetag = args.price > 1000000 ? "Greater than $1000K" : args.price < 500000 ? "Less than $500K" : "$500K to $1000K";
  await Listing.findByIdAndUpdate(args.id, {
    housename: args.housename,
    title: args.title,
    type: args.type,
    location: args.location,
    description: args.description,
    bed: args.bed,
    bath: args.bath,
    park: args.park,
    garden: args.garden,
    price: args.price,
    date: args.date,
    pricetag: pricetag,
  });
}
