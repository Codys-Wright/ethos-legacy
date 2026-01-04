"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function ThemeShowcase() {
  return (
    <div className="space-y-8 py-12">
      {/* Colors & Typography */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Colors & Typography</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6 bg-background text-foreground">
            <h3 className="font-semibold mb-2">Background & Foreground</h3>
            <p className="text-muted-foreground">Muted text example</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Card & Border</h3>
            <div className="border p-2 rounded">Bordered content</div>
          </Card>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Interactive Elements</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      {/* Form Elements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Form Elements</h2>
        <div className="grid gap-4 max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="input">Input Field</Label>
            <Input id="input" placeholder="Input with ring focus" />
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Components</h2>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="space-y-4">
            <Card className="p-4">
              <h3 className="font-semibold">Account Tab</h3>
              <p className="text-muted-foreground">Tab content example</p>
            </Card>
          </TabsContent>
          <TabsContent value="tab2">
            <Card className="p-4">
              <h3 className="font-semibold">Settings Tab</h3>
              <p className="text-muted-foreground">More tab content</p>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Accent & Muted */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Accent & Muted</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-accent text-accent-foreground p-4 rounded">
            Accent Background
          </div>
          <div className="bg-muted text-muted-foreground p-4 rounded">
            Muted Background
          </div>
          <Badge variant="secondary">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
        </div>
      </section>
    </div>
  );
}