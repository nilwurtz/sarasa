import { FileDriver } from "@/driver/FileDriver"
import { FileGateway } from "../FileGateway"

describe("#readBase64", () => {
  it("call driver.read", async () => {
    const readResult = "value"
    const driver = {} as FileDriver
    const read = jest.fn().mockResolvedValue(readResult)
    driver.read = read
    const target = new FileGateway(driver)

    const path = "/path/to/file"
    const actual = await target.readBase64(path)

    expect(read.mock.calls.length).toBe(1)
    expect(read.mock.calls[0][0]).toBe(path)
    expect(read.mock.calls[0][1]).toEqual({ encoding: "utf-8" })
    expect(actual).toBe(readResult)
  })
})


describe("#save", () => {
  it("call driver.save", () => {
    const driver = {} as FileDriver
    const save = jest.fn()
    driver.save = save
    const target = new FileGateway(driver)

    const path = "/path/to/file"
    const body = Buffer.from("bodystring")

    target.save(path, body)
    expect(save.mock.calls.length).toBe(1)
    expect(save.mock.calls[0][0]).toBe(path)
    expect(save.mock.calls[0][1]).toEqual(body)
  })
})