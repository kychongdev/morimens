import tulu from './assets/O01___A_1.png'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Tulu = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>圖魯</CardTitle>
          <CardDescription>傷害型</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={tulu} alt='tulu' className="w-120" />
        </CardContent>
      </Card>
      <Tabs defaultValue="skill" className="w-400">
        <TabsList>
          <TabsTrigger value="skill">技能</TabsTrigger>
          <TabsTrigger value="breakthrough">啟靈</TabsTrigger>
        </TabsList>
        <TabsContent value="skill" className='text-left'>不巧威儀</TabsContent>
        <TabsContent value="breakthrough" className='text-left'>
          暗夜呢喃 <br />-「深夜號令」使觸腕攻擊所有敵人.<br />
          甦醒之觸 <br />-「打擊」和「防禦」使觸腕傷害臨時提高圖魯攻擊的3%.（效果隨「打擊」,「防禦」的等級提升)<br />
          群星歸位 <br /> 「」提高15%臨時暴擊率.
        </TabsContent>
      </Tabs>
    </>
  )
}

