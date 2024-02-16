
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    if (!userData?.email || !userData.password) {
      return NextResponse.json({
        message: "All fields are required!"
      }, {status: 400});
    }

    const duplicate = await User.findOne({ email: userData.email })
        .lean()
        .exec();

    if (duplicate) {
      return NextResponse.json({
        message: "Duplicate email!"
      }, {status: 409});
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await User.create(userData);

    return NextResponse.json({
      message: "User Created."
    }, {status: 201});
  } catch (err) {
    return NextResponse.json({
      message: err?.message || "Something went wrong!"
    }, {status: 500});
  }
}
