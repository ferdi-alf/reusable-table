import { getTasksByUserId } from "@/lib/data/dummy-users-data";
import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const params = await props.params;
    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid user ID",
        },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 400));
    const tasks = getTasksByUserId(userId);

    return NextResponse.json({
      success: true,
      data: tasks,
      meta: {
        userId,
        total: tasks.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch user tasks",
      },
      { status: 500 }
    );
  }
}
