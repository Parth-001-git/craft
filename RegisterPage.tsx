import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-[450px] mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Register</CardTitle>
          <CardDescription className="text-lg">
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-base">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="h-10"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-base">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="h-10"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-base">Password</Label>
              <Input id="password" type="password" required className="h-10" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-base">Confirm Password</Label>
              <Input id="confirmPassword" type="password" required className="h-10" />
            </div>
            <Button type="submit" className="w-full h-11 text-lg font-semibold">
              Register
            </Button>
            <Button variant="outline" className="w-full h-11 text-lg font-semibold">
              Register with Google
            </Button>
          </div>
          <div className="mt-6 text-center text-base">
            Already have an account?{" "}
            <Link to={'/login'} className="underline font-medium hover:text-primary">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default RegisterPage
