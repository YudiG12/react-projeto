export default class MachineMetricData {
    constructor(useRam, tempGPU, useGPU, useCPU, useDisc, rpmCooler, tempCPU, usbDevice, metricDate, metricTime, idMachine, idMachineMetric) {
        this.useRam = useRam
        this.tempGPU = tempGPU
        this.useGPU = useGPU
        this.useCPU = useCPU
        this.useDisc = useDisc
        this.rpmCooler = rpmCooler
        this.tempCPU = tempCPU
        this.usbDevice = usbDevice
        this.metricDate = metricDate
        this.metricTime = metricTime
        this.idMachine = idMachine
        this.idMachineMetric = idMachineMetric
    }
}