import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center p-8 flex-1">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <div className="flex gap-2">
            <Button type="submit" variant="destructive">
              test1
            </Button>
            <Button type="submit" variant="secondary" size="sm">
              test2
            </Button>
            <Button type="submit" variant="ghost">
              test3
            </Button>
          </div>
          <div className="flex gap-2">
            <Button type="submit" size="icon-sm">
              <ArrowUpRight className="size-4" />
            </Button>
            <Button type="submit" className="rounded-full" size="icon">
              <Plus className="size-4" />
            </Button>
            <Button type="submit">
              <Minus className="size-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
